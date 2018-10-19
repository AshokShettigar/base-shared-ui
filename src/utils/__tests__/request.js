import fetchMock from 'fetch-mock';
import Request from 'platform-common-ui/utils/request';

const TEST_PATH = '/test';
const TEST_URL = Request.getHostUrl() + TEST_PATH;

describe('utils/request', function() {
    afterEach(function() {
        fetchMock.restore();
        window.RMM = undefined;
    });

    it('should get correct host url with window.location', function() {
        const url = Request.getHostUrl();
        expect(url).toBeTruthy();
    });

    it('should check the credential option', function() {
        expect(Request.getCredentialsOption({ excludeCookie: true })).toEqual({});
        expect(Request.getCredentialsOption({ excludeCookie: false })).toEqual({
            credentials: 'same-origin'
        });
        expect(Request.getCredentialsOption({})).toEqual({
            credentials: 'same-origin'
        });
        expect(Request.getCredentialsOption({ hostUrl: 'someurl' })).toEqual({
            credentials: 'include'
        });
    });

    it('should get correct host url with port', function() {
        const mockLocation = {
            hostname: 'dummy.com',
            port: '8080',
            protocol: 'https:'
        };
        expect(Request.getHostUrl(mockLocation)).toBe('https://dummy.com:8080');
    });

    it('should get correct host url without port', function() {
        const mockLocation = {
            hostname: 'dummy.com',
            protocol: 'https:'
        };
        expect(Request.getHostUrl(mockLocation)).toBe('https://dummy.com');
    });

    it('should get query param string', function() {
        expect(Request.getQueryParamString({ a: null })).toBe('');
        expect(Request.getQueryParamString({
            a: 'abc',
            b: 'def'
        })).toBe('?a=abc&b=def');
    });

    it('should send a request', function(done) {
        fetchMock.mock(TEST_URL, { value: 'returned' }, { method: 'SOME_METHOD' });
        Request.send(TEST_PATH, { method: 'SOME_METHOD' }).then(data => {
            expect(data).toEqual({ value: 'returned' });
            done();
        });
    });

    it('should send a request with custom host url', function(done) {
        const resourcePath = '/my-resource';
        const hostUrl = 'http://my-host-url.com';

        fetchMock.mock(hostUrl + resourcePath, { value: 'returned' }, { method: 'SOME_METHOD' });
        Request.send(resourcePath, {
            hostUrl,
            method: 'SOME_METHOD'
        }).then(data => {
            expect(data).toEqual({ value: 'returned' });
            done();
        });
    });

    it('should send a request with query parameters', function(done) {
        const urlWithQueryParam = `${TEST_URL}?param1=abc&param2=a%20bc`;
        fetchMock.mock(urlWithQueryParam, { value1: 'returned' });

        Request.send(TEST_PATH, {
            queryParams: {
                param1: 'abc',
                param2: 'a bc'
            },
            method: 'SOME_REQUEST_TYPE'
        }).then(data => {
            expect(data).toEqual({ value1: 'returned' });
            done();
        });
    });

    it('should send a request with request headers', function(done) {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            header1: 'headerValue1',
            'some-header2': 'headerValue2'
        };
        fetchMock.mock(TEST_URL, { prop: 'value' }, { headers });
        Request.send(TEST_PATH, {
            headers: {
                header1: 'headerValue1',
                'Some-Header2': 'headerValue2'
            }
        }).then(data => {
            expect(data).toEqual({ prop: 'value' });
            done();
        });
    });

    it('should send string body in the request', function(done) {
        const data = 'string_data';
        const requestMatcher = (url, options) => {
            expect(options.body).toBe(data);
            return true;
        };
        fetchMock.mock(requestMatcher, {});
        Request.get(TEST_PATH, { data }).then(() => {
            done();
        });
    });

    it('should handle text/plain content type in the response', function(done) {
        fetchMock.mock(TEST_URL, {
            body: 'text_obj',
            headers: {
                'content-type': 'text/plain'
            }
        });
        Request.send(TEST_PATH, { method: 'GET' }).then(data => {
            expect(data).toBe('text_obj');
            done();
        });
    });

    it('should send GET request', function(done) {
        fetchMock.get(TEST_URL, { props: 'value1' });
        Request.get(TEST_PATH).then(data => {
            expect(data).toEqual({ props: 'value1' });
            done();
        });
    });

    it('should send DELETE request', function(done) {
        fetchMock.delete(TEST_URL, {});
        Request.delete(TEST_PATH).then(data => {
            expect(data).toEqual({});
            done();
        });
    });

    it('should send PATCH request', function(done) {
        fetchMock.patch(TEST_URL, {});
        Request.patch(TEST_PATH).then(data => {
            expect(data).toEqual({});
            done();
        });
    });

    it('should send POST request', function(done) {
        const requestData = { prop1: 'value1' };
        const requestMatcher = (url, options) => {
            expect(url).toBe(TEST_URL);
            expect(options.method).toBe('POST');
            expect(options.headers).toEqual(Request.DEFAULT_HEADERS);
            expect(options.body).toBe(JSON.stringify(requestData));
            return true;
        };
        fetchMock.post(requestMatcher, {});
        Request.post(TEST_PATH, { data: requestData }).then(data => {
            expect(data).toEqual({});
            done();
        });
    });

    it('should send PUT request', function(done) {
        const requestData = { prop1: 'value1' };
        const requestMatcher = (url, options) => {
            expect(url).toBe(TEST_URL);
            expect(options.method).toBe('PUT');
            expect(options.headers).toEqual(Request.DEFAULT_HEADERS);
            expect(options.body).toBe(JSON.stringify(requestData));
            return true;
        };
        fetchMock.put(requestMatcher, {});
        Request.put(TEST_PATH, { data: requestData }).then(data => {
            expect(data).toEqual({});
            done();
        });
    });

    it('should throw error on 400', function(done) {
        fetchMock.get(TEST_URL, 400);
        Request.get(TEST_PATH).catch(error => {
            expect(error.message).not.toBeNull();
            expect(error.response).not.toBeNull();
            done();
        });
    });

    it('should process the response on 204', function(done) {
        fetchMock.get(TEST_URL, 204);
        Request.get(TEST_PATH).then(response => {
            expect(response.status).toEqual(204);
            expect(response.statusText).toEqual('No Content');
            done();
        });
    });

    it('should throw error on 500', function(done) {
        fetchMock.get(TEST_URL, 500);
        Request.get(TEST_PATH).catch(error => {
            expect(error.message).not.toBeNull();
            expect(error.response).not.toBeNull();
            done();
        });
    });

    it('should return the integration domain', function() {
        expect(Request.getIntegrationDomain()).toBe(
            'https://integration.control.v2.itsupport247.net');

        // mock RMM
        window.RMM = {};
        expect(Request.getIntegrationDomain()).toBe(
            'https://integration.control.v2.itsupport247.net');

        // mock integrationDomain
        window.RMM.integrationDomain = '/newDomain';
        expect(Request.getIntegrationDomain()).toBe('/newDomain');
    });

    it('should return the iPlanetDirectoryPro', function() {
        expect(Request.getIPlanetDirectoryPro()).toBeFalsy();

        // mock RMM
        window.RMM = {};
        expect(Request.getIPlanetDirectoryPro()).toBeFalsy();

        // mock iPlanetDirectoryPro
        window.RMM.iPlanetDirectoryPro = 'some value';
        expect(Request.getIPlanetDirectoryPro()).toBe('some value');
    });
});
