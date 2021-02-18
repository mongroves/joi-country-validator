'use strict'
const { getCode, getName } = require('country-list');

module.exports = (joi) => {
    return {
        type: 'country',
        base: joi.string(),
        messages: {
            country: 'must be a valid country',
            country_code: 'must be a valid country code'
        },
        coerce(value, helpers) {
            if(helpers.schema.$_getFlag('code')) {
                value = value.toLowerCase();
                return { value }
            }
        },
        validate(value, helpers) {
            console.log(getCode(value));
            console.log(helpers.schema.$_getFlag('code'))
            if (helpers.schema.$_getFlag('code') && value.length <= 2) {
                if (getName(value) === undefined) {
                    return { value, errors: helpers.error('country_code') }
                }
            }

            if (helpers.schema.$_getFlag('country') && getCode(value) === undefined) {
                return { value, errors: helpers.error('country') };
            }
        },
        rules: {
            code: {
                alias: 'code',
                method() {
                    return this.$_setFlag('code');
                }
            },
            country: {
                alias: 'country',
                method() {
                    return this.$_setFlag('country');
                }
            }
        }
    }
};
