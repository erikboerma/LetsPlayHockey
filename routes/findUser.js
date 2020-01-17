const passport = require('passport');
const User = require('../sequelize');

module.exports = app => {
  app.get('/findUser', (req, res, next) => {
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
            res.status(200).send({
              auth: true,
              firstName: userInfo.firstName,
              lastName: userInfo.lastName,
              position: userInfo.position,
              skill: userInfo.skill,
              availability: userInfo.availability,
              email: userInfo.email,
              username: userInfo.username,
              password: userInfo.password,
              message: 'user found in db',
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