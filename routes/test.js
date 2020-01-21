const Models = require('../sequelize');
const User = Models.User;
const UserAvailability = Models.UserAvailability;

module.exports = app => {
  app.post('/test', (req, res, next) => {
    console.log(req.body)
    UserAvailability.findOne({
      where: {
        UserId: req.body.id,
      },
    }).then(user => {
      if (user != null) {
        user
          .update({
            monday: false
          })
          .then(() => {
            console.log('user updated');
            res.status(200).send({
              auth: true,
              message: 'user updated'
            });
          });
      } else {
        console.error('no user exists in db to update');
        res.status(401).send('no user exists in db to update');
      }
    });
  })
};