import MockAdapter from 'axios-mock-adapter';

import { http, httpOptions, mockHttpOptions } from '../http';
import * as helpers from '../helpers';
import { URLS } from '../constants';

const baseURL = 'https://integration.control.v2.itsupport247.net';

describe('axios', () => {
    const expectedHttpOptions = {
        baseURL,
        withCredentials: true,
        headers: {
            iPlanetDirectoryPro: null
        }
    };

    const url = 'https://some-url.com';

    it('instance should have correct http options', () => {
        expect(httpOptions).toEqual(expectedHttpOptions);
    });

    it('mock instance should have correct http options', () => {
        expect(mockHttpOptions).toEqual({ baseURL });
    });

    it('should successfully call HTTP request with GET method then return correct response', () => {
        const mockedHttp = new MockAdapter(http);
        const data = { property: 'some date' };

        mockedHttp.onGet(url).reply(200, data);

        return http.get(url).then(response => {
            expect(response.status).toEqual(200);
            expect(response.data).toEqual(data);
        });
    });

    it('should logout on 401 HTTP status code', () => {
        const mockedHttp = new MockAdapter(http);

        helpers.shouldRedirectOnInvalidToken = jest.fn().mockReturnValue(true);
        helpers.getLogoutUrl = jest.fn().mockReturnValue(URLS.LOG_OUT);
        Object.defineProperty(global.window.location, 'href', {
            writable: true,
            value: ''
        });

        mockedHttp.onGet(url).reply(401);

        return http.get(url).catch(error => {
            expect(error.response.status).toEqual(401);
            expect(helpers.shouldRedirectOnInvalidToken).toBeCalled();
            expect(helpers.getLogoutUrl).toBeCalled();
            expect(global.window.location.href).toBe(URLS.LOG_OUT);
        });
    });
});
