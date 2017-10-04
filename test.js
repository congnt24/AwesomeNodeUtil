var utils = require('./index')


var date = utils.DateTime.toDate("20000808", "YYYYMMDD");
var date2 = utils.DateTime.toNewFormat("20000808", "YYYYMMDD", "YYYY-MM-DD 23:59:59+07:00");

console.log(date);
console.log(date2);

console.log(utils.Crypto.md5('this is a key'));
console.log(utils.Crypto.sha1('this is a key'));
console.log(utils.Crypto.sha256('this is a key'));

utils.Validate.validateEmpty({firstname: "cong", lastname: 0});