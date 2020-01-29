const passport = require('passport');
const Models = require('../models');
const User = Models.User;

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {

    console.log(`Req.Body - ${JSON.stringify(req.body)}\n`)
    console.log(req.body.username.username);

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
                username: req.body.username.username
              }
            })
            .then(user => {
              console.log(user)
              user
                .update({
                  firstName: req.body.data.firstName,
                  lastName: req.body.data.lastName,
                  email: req.body.data.email,
                  position: req.body.data.position,
                  shot: req.body.data.shot,
                  skillLevel: req.body.data.skillLevel,
                  notice: req.body.data.notice,
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