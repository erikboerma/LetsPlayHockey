const passport = require('passport');
const Models = require('../sequelize');
const User = Models.User;
const UserAvailability = Models.UserAvailability;


// const userAvailabilityUpdate = new Promise((resolve, reject) => {
//   UserAvailability.findOne({
//     where: {
//       UserId: req.body.id
//     }
//   }).then(userAvailability => {
//     console.log(userAvailability);
//     req.body.availability.forEach((key, i) => {
//       console.log(`Req.Body.Availability - ${JSON.stringify(key)}: ${i}`)
//       const field = key.label;
//       userAvailability.update({});
//     })
//   })
// });


module.exports = app => {
  app.post('/registerUser', (req, res, next) => {

    console.log(`Req.Body - ${JSON.stringify(req.body)}\n`)

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
          // await User.findOne({
          //     where: {
          //       username: req.body.username
          //     }
          //   })
          //   .then(user => {
          //     console.log(user)
          //     user
          //       .update({
          //         firstName: req.body.firstName,
          //         lastName: req.body.lastName,
          //         email: req.body.email,
          //         position: req.body.position,
          //         shot: req.body.shot,
          //         skillLevel: req.body.skillLevel,
          //         notice: req.body.notice,
          //       })
          //   })

          // .then(() => {
          console.log(user.id)
          UserAvailability.findOne({
            where: {
              UserId: user.id
            }
          }).then(userAvailability => {
            console.log('\n User Availability - ' + userAvailability);
            userAvailability.update({
              monday: true
            })
          });
        })

        // .then(() => {
        //   console.log('user created in db');
        //   res.status(200).send({
        //     message: 'user created'
        //   });
        // });
      };
    })(req, res, next);
  })
}