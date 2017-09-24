module.exports = {

    /**
     * Validate object, if there is a field in object is undefine, it will throw an error so you can catch that error.
     * @param object {firstName: cong, lastName: null}
     */
    validateEmpty: function (object) {
        var keys = Object.keys(object);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var value = object[key];
            if (!value || value === '' || value == null) {
                throw new Error(key + ' cannot be null.');
            }
        }
    },
    /**
     *
     * @param {string} str
     * @returns {boolean}
     */
    isNumber: function (str) {
        return !isNaN(parseFloat(str)) && isFinite(str)
    },
    /**
     * validate email
     * @param email
     * @returns {boolean}
     */
    validateEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    /**
     * validate a UUID
     * @param uuid
     * @returns {boolean}
     */
    isUUID: function (uuid) {
        // language=JSRegexp
        var re = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return re.test(uuid);
    }
}