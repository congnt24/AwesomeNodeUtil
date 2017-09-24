var moment = require('moment')

module.exports = {
    toDate: function (stringDate, format) {
        return moment(stringDate, format).toDate()
    },

    /**
     * Convert a string of date from a format to other format
     * @param stringDate 20170101
     * @param oldFormat YYYYMMDD
     * @param newFormat YYYY-MM-DD
     * @returns {string}
     */
    toNewFormat: function (stringDate, oldFormat, newFormat) {
        return moment(stringDate, oldFormat).format(newFormat)
    }
}