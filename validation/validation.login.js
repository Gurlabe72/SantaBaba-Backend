const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateReisterInput(data) {
    let errors = {};

    //have empty objects set to empty strings so validator can be used

    data.name = !!isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password) ? data.password2 : "";

    //client-side validation for name 
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    //now for emails 
    if (Validator.isEmpty(data.email)) {
        errors.isEmpty = "email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    };
    //and passwords 
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password Field is required "
    }
    if (!Validator.isEmpty(data.password2)) {
        errors.password = "Please confirm your password"
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 Characters in Length"
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};



