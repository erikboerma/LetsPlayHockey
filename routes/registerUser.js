const passport = require('passport');
const User = require('../sequelize');

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {
    console.log(req.body)
    passport.authenticate('register', (err, user, info) => {
      console.log(user);
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: user.username,
          };
          User.findOne({
            where: {
              username: data.username,
            },
          }).then(user => {
            user
              .update({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
              })
              .then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
          });
        });
      }
    })(req, res, next);
  });
};