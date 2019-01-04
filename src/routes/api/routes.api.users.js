const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');
const passport = require('passport');

//Bring in your Validation folder
const validationRegisterInput = require("../validation/validation.register");
const validationLoginInput = require("../validation/validation.login");

//bring in the User Model 
const User = require("../../queries/users.query");

router.post('/register', (req, res) => {
    //Client-form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    //Checking validation
    if (!isValid) {
        return res.status(400).json(errors)
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "email already exists" })
            }

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.email
            });

            //hash password before sotring into database 
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        })
}); 
