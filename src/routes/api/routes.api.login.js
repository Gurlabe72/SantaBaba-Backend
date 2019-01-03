router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: 'Email not found' });
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name
                };
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 86400
                    },
                    (err, token) => {
                        res.json({
                            sucess: true,
                            token: 'Bearer' + token
                        });
                    }
                )
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: 'Password Incorrect' });
            }
        });
    });
});

module.exports = router;