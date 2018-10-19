export const partnerId = '0';

// https://continuum.atlassian.net/wiki/spaces/C2E/pages/153880042/REST+API+Design+Guide
export const HTTP_STATUSES = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    UNSUPPORTED_MEDIA_TYPE: 415,
    TOO_MANY_REQUESTS: 429,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
};

export const URLS = {
    INTEGRATION: 'https://integration.control.v2.itsupport247.net',
    LOG_OUT: 'https://control.dtitsupport247.net/logout.asp'
};
