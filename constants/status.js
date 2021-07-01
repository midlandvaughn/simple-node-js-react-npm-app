module.exports = {
    FAIL: 'fail'
    , SUCCESS: 'success'
    , OK: { code: 200, msg: 'OK' }
    , ACCEPTED: { code: 202, msg: 'Accepted' }
    , NO_CONTENT: { code: 204, msg: 'No content' }
    , BAD_REQUEST: { code: 400, msg: 'Bad request' }
    , UNAUTHORIZED: { code: 401, msg: 'Unauthorized' }
    , FORBIDDEN: { code: 403, msg: 'Forbidden' }
    , NOT_FOUND: { code: 404, msg: 'Not found' }
    , TOO_MANY_REQUESTS: { code: 429, msg: 'Too many requests' }
    , INTERNAL_SERVER_ERROR: { code: 500, msg: 'Internal server error' }
};