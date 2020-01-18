const User = require('../sequelize');

module.exports = app => {
  app.put('/updateUserTest', (req, res, next) => {
    console.log(req.body.position)
    console.log(req.body.shot)
    console.log(req.body.skillLevel)
    console.log(req.body.notice)

    User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((userInfo) => {
      if (userInfo != null) {
        console.log('user found in db');
        userInfo
          .update({
            position: req.body.position,
            shot: req.body.shot,
            skillLevel: req.body.skillLevel,
            notice: req.body.notice
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