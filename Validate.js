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
            if (value === undefined || value == NaN || value === '' || value === null) {
                throw new Error(key + ' cannot be null.');
            }
        }
    },
    /**
     * This function will take a data object and a validate object, the validate object will define the validation data
     * for each field in data object suck as: min, max, is_json, no_white_space, in, gt, gte, lt, lte
     * @param object : data objcet
     * @param validate_objs: validate object
     */
    validateAll: function (object, validate_objs) {
        var keys = Object.keys(object);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var value = object[key];
            var validate_obj = validate_objs[key];
            if (value === undefined || value == NaN || value === '' || value === null) {
                if (!validate_obj.optional) {
                    throw new Error(key + ' cannot be null.');
                }
            }
            //trim value if it's string
            if (typeof value === 'string') {
                value = value.trim();
                object[key] = value;
            }
            if (validate_obj) {
                validate_obj.min = validate_obj.min || 0;
                validate_obj.max = validate_obj.max || Number.MAX_VALUE;
                if (typeof value === 'string') {
                    if (value.length < validate_obj.min || value.length > validate_obj.max) {
                        throw new Error(key + ' must in range ' + validate_obj.min + ' - ' + validate_obj.max + '.');
                    }
                    //validate no space in string
                    if (validate_obj.no_white_space && value.indexOf(' ') !== -1) {
                        throw new Error(key + ' cannot have white space inside.');
                    }
                    //parse json
                    if (validate_obj.is_json) {
                        object[key] = JSON.parse(value);
                    }
                }
                if (typeof value === 'number') {
                    if (value < validate_obj.min || value > validate_obj.max) {
                        throw new Error(key + ' must in range ' + validate_obj.min + ' - ' + validate_obj.max + '.');
                    }
                    //condition between 2 field
                    if (validate_obj.gt && value <= object[validate_obj.gt]) {
                        throw new Error(key + ' must be greater than ' + validate_obj.gt);
                    } else if (validate_obj.gte && value < object[validate_obj.gte]) {
                        throw new Error(key + ' must be greater than or equal to ' + validate_obj.gte);
                    } else if (validate_obj.lt && value >= object[validate_obj.lt]) {
                        throw new Error(key + ' must be less than ' + validate_obj.lt);
                    } else if (validate_obj.lte && value > object[validate_obj.lte]) {
                        throw new Error(key + ' must be less than or equal to ' + validate_obj.lte);
                    }
                }

                if (validate_obj.in && Array.isArray(validate_obj.in)) {
                    if (validate_obj.in.indexOf(value) === -1) {
                        throw new Error(key + ' must in '+JSON.stringify(validate_obj.in));
                    }
                }
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