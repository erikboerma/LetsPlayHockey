const User = require('../sequelize');
const jwtSecret = require('../config/jwtConfig');
const jwt = require('jsonwebtoken');
const passport = require('passport');

module.exports = app => {
  app.post('/updateUser', (req, res, next) => {
    passport.authenticate('jwt', {
      session: false
    }, (err, user, info) => {
      console.log(`\nUser Server Side - ${JSON.stringify(user)}`)

      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.log(info.message);
        res.status(401).send(info.message);
      } else {
        User.findOne({
          where: {
            username: user.username,
          },
        }).then(userInfo => {
          if (userInfo != null) {
            console.log('user found in db from findUsers');
            console.log(user);
            user.update({
              position: req.body.position,
              shot: req.body.shot,
              skillLevel: req.body.skillLevel,
              notice: req.body.notice,
            });
          } else {
            console.error('no user exists in db with that username');
            res.status(401).send('no user exists in db with that username');
          }
        });
      }
    })(req, res, next);
  });
};
