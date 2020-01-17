const User = require('../sequelize');
const jwtSecret = require('../config/jwtConfig');
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = app => {
  app.post('/loginUser', (req, res, next) => {
    // console.log(`req.body - ${JSON.stringify(req.body)}\n`)
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        req.logIn(user, err => {
          // console.log(`user - ${JSON.stringify(user)}\n`)
          User.findOne({
            where: {
              username: user.username,
            },
          }).then(user => {
            const token = jwt.sign({
              id: user.username
            }, jwtSecret.secret);
            res.status(200).send({
              auth: true,
              token: token,
              message: 'user found & logged in',
            });

            user.update({
              jwt: token
            });

          });
        });
      }
    })(req, res, next);
  });
};