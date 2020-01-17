const passport = require('passport');
const User = require('../sequelize');

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {

    console.log('Req.Body - ' + JSON.stringify(req.body))

    passport.authenticate('register', (err, user, info) => {
      console.log('User - ' + JSON.stringify(user));
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {

        req.logIn(user, err => {
          User.findOne({
            where: {
              username: req.body.username,
            },
          }).then(user => {
            user
              .update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
              })
              .then(() => {
                console.log('user created in db');
                res.status(200).send({
                  message: 'user created'
                });
              });
          });
        });
      }
    })(req, res, next);
  });
};