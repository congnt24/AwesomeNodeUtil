module.exports = {
    validateEmpty: function (object) {
        var keys = Object.keys(object);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var value = object[key];
            if (!value || value === '' || value == null) {
                throw new Error(key + ' cannot be null.');
            }
        }
    }
}