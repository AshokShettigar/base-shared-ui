import axios from 'axios';
import { get } from 'lodash';

import * as helpers from './helpers';
import { HTTP_STATUSES } from './constants';

const httpOptions = {
    baseURL: helpers.getIntegrationUrl(),
    withCredentials: true,
    headers: {
        iPlanetDirectoryPro: helpers.getIPlanetDirectoryPro()
    }
};

const http = axios.create(httpOptions);

http.defaults.headers.post['Content-Type'] = 'application/json';

// eslint-disable-next-line
http.interceptors.response.use(response => response, error => {
    const status = get(error, 'response.status');

    if (HTTP_STATUSES.UNAUTHORIZED === status) {
        if (helpers.shouldRedirectOnInvalidToken()) {
            window.location.href = helpers.getLogoutUrl();
        }
    }

    return Promise.reject(error);
});

const mockHttpOptions = {
    baseURL: helpers.getIntegrationUrl()
};

const mockedHttp = axios.create(mockHttpOptions);

export { httpOptions, mockHttpOptions, http, mockedHttp };
