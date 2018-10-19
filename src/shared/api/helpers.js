import { bool, any } from 'prop-types';
import axios from 'axios';
import get from 'lodash/get';

import { URLS, HTTP_STATUSES } from './constants';

export const defaultInitialState = {
    loading: false,
    loaded: false,
    error: null
};

export const defaultPropTypes = {
    loading: bool.isRequired,
    loaded: bool.isRequired,
    error: any
};

export const shouldRedirectOnInvalidToken = () => (
    get(window, 'RMM.shouldRedirectOnInvalidToken', true)
);

export const getLogoutUrl = () => (
    get(window, 'RMM.logoutUrl', URLS.LOG_OUT)
);

export const getIntegrationUrl = () => (
    window.RMM && window.RMM.integrationDomain
        ? window.RMM.integrationDomain
        : URLS.INTEGRATION
);

export const getIPlanetDirectoryPro = () => (
    window.RMM && window.RMM.iPlanetDirectoryPro ? window.RMM.iPlanetDirectoryPro : null
);

export const getUrlById = (url, { id } = {}) => (id ? `${url}/${id}` : url);

/*
 * @param {string} tpl - Template.
 * @param {object} date - The data of keys & values.
 *
 * @example getUrlByTemplate('some-url/{{managedEndPointId}}/count', { managedEndPointId: 10 })
 * @returns {String} some-url/10/count
 */
export const getUrlByTemplate = (tpl, data = {}) =>
    tpl.replace(/\{\{(\w+)\}\}/g, (str, key) =>
        (typeof data[key] !== 'undefined' ? data[key] : str));

export const getParams = (params = {}) => ({
    ...params,
    params: {
        noCache: new Date(),
        ...params.params
    }
});

export const handleErrors = error => {
    if (axios.isCancel(error)) {
        return Promise.reject({ status: HTTP_STATUSES.CLIENT_CLOSED_REQUEST, message: 'Client Closed Request' });
    }

    if (error.response) {
        return Promise.reject(error.response);
    }

    return Promise.reject(error.request || error.message);
};
