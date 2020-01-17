const User = require('../sequelize');

module.exports = app => {
    app.get('/findUserTest', (req, res, next) => {
        User.findOne({
            where: {
                jwt: req.query.jwt
            }
        }).then(user => {
            res.status(200).send({
                firstName: user.firstName,
                lastName: user.lastName
            })
        });
    })
}