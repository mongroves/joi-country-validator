# joi-country
A simple joi extension to validate countries

# Features
- validates country strings

# Installation
```
npm install joi-country

or

yarn add joi-country
```

# Usage
```
const joi = require('joi');
const joi-country = require('joi-country');

const Joi = joi.extend(joi-counry);

const test2 = { country: 'ch' };

const schema = joi.object().keys({
    country: joi.string().country(),
})


const { value, error } = Joi.compile(schema)
    .prefs({ errors: { label: 'key' } })
    .validate(test2);

console.log({ value, error});
```

# License
MIT license
