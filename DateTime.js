var moment = require('moment');

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
    toNewFormat: function (stringDate, oldFormat, newFormat = 'YYYY-MM-DD') {
        return moment(stringDate, oldFormat).format(newFormat)
    },

    toStartDate: function (stringDate, oldFormat, newFormat = 'YYYY-MM-DD', utc) {
        return moment(stringDate, oldFormat).format(newFormat + ' 00:00:00' + utc)
    },

    toEndDate: function (stringDate, oldFormat, newFormat = 'YYYY-MM-DD', utc) {
        return moment(stringDate, oldFormat).format(newFormat + ' 23:59:59' + utc)
    }
};