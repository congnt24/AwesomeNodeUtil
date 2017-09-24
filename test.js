const utils = require('./index')


var date = utils.DateTime.toDate("20000808", "YYYYMMDD");
var date2 = utils.DateTime.toNewFormat("20000808", "YYYYMMDD", "YYYY-MM-DD 23:59:59+07:00");

console.log(date);
console.log(date2);

utils.Validate.validateEmpty({firstname: "cong", lastname: null});