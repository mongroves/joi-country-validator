const Joi = require('joi');
const countryValidator = require('./index');
// console.log(countryValidator());
const joi = Joi.extend(countryValidator);

const test1 = { country: 'xhina' };
const test2 = { country: 'china' };

const schema = joi.object().keys({
    country: joi.country().country(),
})

const { value, error } = Joi.compile(schema)
    .prefs({ errors: { label: 'key' } })
    .validate(test2);

const { value: v, error: er } = Joi.compile(schema)
    .prefs({ errors: { label: 'key' } })
    .validate(test1);

console.log({ value, error});

console.log({ value: v, error: er });
