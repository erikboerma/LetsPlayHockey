const User = require('../models/user');


module.exports = app => {
    app.post('/registerUserTest', (req, res) => {
        User.create({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            console.log(user);
        })
    })
};

