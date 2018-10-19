import { API } from '../shared';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
const NO_CONTENT = 204;

function getHostUrl(location = window.location) {
    const protocol = location.protocol;
    const port = (location.port && location.port.length > 0) ? `:${location.port}` : '';
    return `${protocol}//${location.hostname}${port}`;
}

function getQueryParamString(queryParams = {}) {
    const keys = Object.keys(queryParams);
    const queryParamList = keys.reduce((result, key) => {
        const value = queryParams[key];
        if (value !== 0 && !value) return result;
        result.push(`${key}=${encodeURIComponent(value)}`);
        return result;
    }, []);

    if (!queryParamList.length) {
        return '';
    }

    return `?${queryParamList.join('&')}`;
}

function getCredentialsOption(options) {
    if (options.excludeCookie) { return {}; }

    return {
        credentials: options.hostUrl ? 'include' : 'same-origin'
    };
}

function getIntegrationDomain() {
    if (!window.RMM || !window.RMM.integrationDomain) {
        return 'https://integration.control.v2.itsupport247.net';
    }
    return window.RMM.integrationDomain;
}

function getIPlanetDirectoryPro() {
    if (!window.RMM || !window.RMM.iPlanetDirectoryPro) { return null; }
    return window.RMM.iPlanetDirectoryPro;
}

function handleSuccess(response) {
    const { headers, status, statusText } = response;

    if (status === NO_CONTENT) {
        return Promise.resolve({
            status,
            statusText
        });
    }

    if (headers.get('content-type') === 'text/plain') {
        return response.text();
    }

    return response.json().then(json => Promise.resolve(json));
}

/**
 * @param resourcePath - the resource path url
 * @param options - method(String) [required] -- [GET|POST|PUT|DELETE|PATCH|OPTION]
 *                  data(Object) -- the request body
 *                  headers(Object) -- { header1: 'val', header2: 'val2' }
 *                                  -- [Content-Type=application/json] by default
 *                  hostUrl(String) -- host url, if not same as the webserver
 *                  excludeCookie(Bool) -- flag to exclude the cookie with the request
 *                  queryParams(Object) -- { page: '1', filter: 'blah' }
 * @return ES6 Promise
 */
function send(resourcePath, options) {
    const url = (options.hostUrl || getHostUrl())
        + resourcePath
        + getQueryParamString(options.queryParams);
    const headers = {
        ...DEFAULT_HEADERS,
        ...options.headers
    };
    const body = typeof options.data === 'string' ? options.data : JSON.stringify(options.data);
    const fetchOptions = {
        ...getCredentialsOption(options),
        headers,
        body,
        method: options.method
    };

    return fetch(url, fetchOptions).then(response => {
        if (API.HTTP_STATUSES.UNAUTHORIZED === response.status) {
            window.location.href = API.getLogoutUrl();
        }

        if (response.ok) {
            return handleSuccess(response);
        }

        return response.json().then(json => {
            const error = new Error(json.error.message || response.statusText);
            return Promise.reject(Object.assign(error, { response }));
        });
    });
}

export default {
    DEFAULT_HEADERS,

    getCredentialsOption,

    getHostUrl,

    getQueryParamString,

    getIntegrationDomain,

    getIPlanetDirectoryPro,

    send,

    delete: (url, options) => send(url, {
        ...options,
        method: 'DELETE'
    }),

    get: (url, options) => send(url, {
        ...options,
        method: 'GET'
    }),

    patch: (url, options) => send(url, {
        ...options,
        method: 'PATCH'
    }),

    post: (url, options) => send(url, {
        ...options,
        method: 'POST'
    }),

    put: (url, options) => send(url, {
        ...options,
        method: 'PUT'
    })
};
