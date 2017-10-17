// Rest API middleware
'use strict';
var ErrorCode = require('./ErrorCode');

module.exports = function rest() {
    return function (req, res, next) {
        /**
         * send error message to user
         * @param array [401, 'unauthenticated']
         */
        res.sendError = function (array) {
            console.error(array);
            let {code, message} = array;
            if (ErrorCode[code]) {
                message = ErrorCode[code].message;
            }
            if (!code) {
                if (typeof array === 'string') {
                    array = [400, array]
                } else if (array.constructor.name.endsWith('Error')) {
                    array = [400, array.message]
                }
                [code, message] = array;
            }

            if (typeof code === 'number') {
                res.statusCode = code;
            }
            if (code === 401) {
                res.setHeader("WWW-Authenticate", 'Bearer realm="Users", error="invalid_token"');
            }
            res.json({
                status: 'error',
                message: message,
                error_code: code
            });
        };

        /**
         * response to user
         * @param array : [message, data, paging], if message is a number (400, ...), it will send an error message
         */
        res.sendJson = function (array) {
            let {message, data, paging} = array;
            if (!message || !data) {
                if (!Array.isArray(array)) {
                    array = ['success', array]
                }
                [message, data, paging] = array;
            }
            res.statusCode = 200;
            res.json({
                status: 'success',
                message,
                data,
                paging
            });

        };

        next();
    };

}
;

