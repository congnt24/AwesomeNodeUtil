var utils = require('./index')


var date = utils.DateTime.toDate("20000808", "YYYYMMDD");
var date2 = utils.DateTime.toNewFormat("20000808", "YYYYMMDD", "YYYY-MM-DD 23:59:59");

console.log(date);
console.log(date2);

console.log(utils.Crypto.md5('this is a key'));
console.log(utils.Crypto.sha1('this is a key'));
console.log(utils.Crypto.sha256('this is a key'));

utils.Validate.validateEmpty({firstname: "cong", lastname: 0});


var data = {id: 20, id2: 50, name: ' cong ', json: '{"jj": "This is a value of json object"}', optional: undefined};
try {

    utils.Validate.validateAll(data, {
        id2: {gte: 'id', in: [1, 2, 3, 50], error_code: '400'},    //id must be 1, 2, 3 or  50 and id2 must greater than or equal to id
        id: {min: 1, max: 19, error_code: '123d'},                  // id must between 1 and 19
        name: {in: ['cong', 'nguyen'], max: 50, no_white_space: true},  // name have no space between 2 words, and max length is 50
        json: {is_json: true},   // Parse this value to json
        optional: {optional: true}  //this field can be null
    });
} catch(err) {
    console.error(err)
}

console.log(data);
console.error(data.json.jj); //This is a value of json object


// console.log((new Date()).toISOString() + '');
