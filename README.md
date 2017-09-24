## Usage

```javascript
const utils = require('awesome-node-util')

//DateTime
var date = utils.DateTime.toDate("20000808", "YYYYMMDD");
//output: 2000-08-07T17:00:00.000Z
var date2 = utils.DateTime.toNewFormat("20000808", "YYYYMMDD", "YYYY-MM-DD 23:59:59+07:00");
//output: 2000-08-08 23:59:59+07:00

utils.Validate.validateEmpty({firstname: "cong", lastname: null});
//output: Error: lastname cannot be null.
```