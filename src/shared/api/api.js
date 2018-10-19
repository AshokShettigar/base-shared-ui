import axios from 'axios';
import { http } from './http';

import { getParams, handleErrors } from './helpers';

const cancelToken = {};

export const generateAbortToken = () => new axios.CancelToken(a => { cancelToken.abort = a; });
export const ABORT_TOKEN = 'cancelToken';

export const create = (url, data, config) =>
    http.post(url, data, config)
        .then(response => response.data)
        .catch(error => handleErrors(error));

export const load = (url, config) =>
    http.get(url, getParams(config))
        .then(response => response.data)
        .catch(error => handleErrors(error));

export const update = (url, data, config) =>
    http.put(url, data, config)
        .then(response => response.data)
        .catch(error => handleErrors(error));

export const remove = (url, config) =>
    http.delete(url, config)
        .then(response => response.data)
        .catch(error => handleErrors(error));

// eslint-disable-next-line
create.cancelToken = load.cancelToken = update.cancelToken = remove.cancelToken = cancelToken;
