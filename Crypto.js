var crypto = require('crypto');

var Crypto = {};


Crypto.hmac = function (key, secret) {
    return crypto.createHmac('sha256', secret).update(key, 'utf8').digest('hex');
};

Crypto.sha1 = function (key) {
    return crypto.createHash('sha1').update(key, 'utf8').digest('hex')
};

Crypto.sha256 = function (key) {
    return crypto.createHash('sha256').update(key, 'utf8').digest('hex')
};

Crypto.md5 = function (key) {
    return crypto.createHash('md5').update(key, 'utf8').digest("hex")
};

module.exports = Crypto;