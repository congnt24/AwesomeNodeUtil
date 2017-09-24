var moment = require('moment')

module.exports = {
    toDate: function (stringDate, format) {
        return moment(stringDate, format).toDate()
    },

    toNewFormat: function (stringDate, oldFormat, newFormat) {
        return moment(stringDate, oldFormat).format(newFormat)
    }
}