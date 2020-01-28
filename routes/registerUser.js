const passport = require('passport');
const Models = require('../sequelize');
const User = Models.User;

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {
    console.log(`Req.Body - ${JSON.stringify(req.body)}\n`)

    passport.authenticate('register', (err, user, info) => {
      console.log('User - ' + JSON.stringify(user));
      if (err) {
        console.log('here')
        console.log(err);
      }
      if (info != undefined) {
        console.log('here-2')
        console.log(info.message);
        res.send(info.message);
      } else {

        req.logIn(user, err => {
          User.findOne({
              where: {
                username: req.body.username
              }
            })
            .then(user => {
              console.log(user)
              user
                .update({
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: req.body.email,
                  position: req.body.position,
                  shot: req.body.shot,
                  skillLevel: req.body.skillLevel,
                  notice: req.body.notice,
                })
            })
            .then(() => {
              console.log('user created in db');
              res.status(200).send({
                userId: user.id,
                message: 'user created'
              });
            });
        });
      };
    })(req, res, next);
  })
}