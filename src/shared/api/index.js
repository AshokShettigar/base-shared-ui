import * as http from './http';
import * as api from './api';
import * as mock from './mock';
import * as constants from './constants';
import * as helpers from './helpers';

const API = {
    ...http,
    ...api,
    ...mock,
    ...constants,
    ...helpers
};

export default API;
