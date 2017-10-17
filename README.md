## Install
```bash
npm i --save awesome-node-util
```

## Usage

```javascript
var utils = require('awesome-node-util')

//DateTime
var date = utils.DateTime.toDate("20000808", "YYYYMMDD");
//output: 2000-08-07T17:00:00.000Z
var date2 = utils.DateTime.toNewFormat("20000808", "YYYYMMDD", "YYYY-MM-DD 23:59:59+07:00");
//output: 2000-08-08 23:59:59+07:00

utils.Crypto.md5('this is a key');
//output: 7d0897da070ef04eecdb8e7e2aed7cbe
utils.Crypto.sha1('this is a key');
//output: 3e1fd99955ab89bfd23a03c185b0447302f6bc10
utils.Crypto.sha256('this is a key');
//output: c9fc5d06292274fd98bcb57882657bf71de1eda4df902c519d915fc585b10190

utils.Validate.validateEmpty({firstname: "cong", lastname: null});
//output: Error: lastname cannot be null.


var data = {id: 18, id2: 50, name: ' cong ', json: '{"jj": "This is a value of json object"}', optional: undefined};

utils.Validate.validateAll(data, {
    id2: {gte: 'id', in: [1, 2, 3, 50]},    //id must be 1, 2, 3 or  50 and id2 must greater than or equal to id
    id: {min: 1, max: 19},                  // id must between 1 and 19
    name: {in: ['cong', 'nguyen'], max: 50, no_white_space: true},  // name have no space between 2 words, and max length is 50
    json: {is_json: true},   // Parse this value to json
    optional: {optional: true}  //this field can be null
});
console.error(data.json.jj); //output: 'This is a value of json object'

```