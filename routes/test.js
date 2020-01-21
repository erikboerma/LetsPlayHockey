const Models = require('../sequelize');
const User = Models.User;
const UserTeam = Models.UserTeam;

module.exports = app => {
  app.post('/test', (req, res, next) => {
    UserTeam.findOne({
      where: {
        UserId: 7,
      },
    }).then(user => {
      if (userInfo != null) {
        user
          .update({
            monday: true
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