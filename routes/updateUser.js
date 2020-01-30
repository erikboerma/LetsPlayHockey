const Models = require('../models');
const User = Models.User;

module.exports = app => {
  app.post('/updateUser', (req, res, next) => {
    console.log(JSON.stringify(req.body))
    User.findOne({
      where: {
        username: req.body.user.username,
      },
    }).then(userInfo => {
      if (userInfo !== null) {
        console.log('user found in db');
        userInfo
          .update({
            firstName: req.body.data.firstName,
            lastName: req.body.data.lastName,
            shot: req.body.data.shot,
            skillLevel: req.body.data.skillLevel,
            notice: req.body.data.notice,
            avatar: req.body.data.avatar
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
        res.json(req.body)
      }
    });
  });
};