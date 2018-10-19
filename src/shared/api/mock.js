import MockAdapter from 'axios-mock-adapter';

import { mockedHttp } from './http';

export const setMock = new MockAdapter(mockedHttp, { delayResponse: 1000 });

export const mockedCreate = (url, data, config) =>
    mockedHttp.post(url, data, config)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response));

export const mockedLoad = (url, config) =>
    mockedHttp.get(url, config)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response));

export const mockedUpdate = (url, data, config) =>
    mockedHttp.put(url, data, config)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response));

export const mockedRemove = (url, config) =>
    mockedHttp.delete(url, config)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response));
