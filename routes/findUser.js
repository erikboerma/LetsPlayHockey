const passport = require('passport');
const Models = require('../sequelize');
const User = Models.User;
const Team = Models.Team;
const Game = Models.Game;
const UserTeam = Models.UserTeam

module.exports = app => {
  app.get('/findUser', (req, res, next) => {
    passport.authenticate('jwt', {
      session: false
    }, (err, user, info) => {
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
          include: [{
            model: Team,
            as: 'Teams',
            through: {
              model: UserTeam,
              as: 'userTeams',
              attributes: ['TeamId', 'UserId']
            },
            include: [{
              model: Game,
              as: 'Games',
            }]
          }]
        }).then(userInfo => {
          console.log('User - ' + user)
          if (userInfo !== null) {
            console.log('user found in db from findUsers');
            res.status(200).send({
              auth: true,
              message: 'user found in db',
              id: userInfo.id,
              firstName: userInfo.firstName,
              lastName: userInfo.lastName,
              skillLevel: userInfo.skillLevel,
              shot: userInfo.shot,
              notice: userInfo.notice,
              email: userInfo.email,
              username: userInfo.username,
              teams: userInfo.Teams
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