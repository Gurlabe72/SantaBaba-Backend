const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateReisterInput(data) {
    let errors = {};

    //have empty objects set to empty strings so validator can be used


    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

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
    return {
        errors,
        isValid: isEmpty(errors)
    };
};

