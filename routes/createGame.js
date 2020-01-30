const Models = require("../models");
const Game = Models.Game;
const Team = Models.Team;
const UserTeam = Models.UserTeam;

module.exports = app => {
  app.post("/createGame", (req, res, next) => {
    console.log(req.body);
    // Team.findOne({
    //   where: {
    //     id: req.body.teamId
    //   }
    // })
    // .then(team => {
    //   if (team !== null) {
    Game.create({
      location: req.body.location,
      datetime: req.body.datetime,
      TeamId: team.id
    }).then(game => {
      console.log(game.id);
      UserTeam.findOne({
        where: {
          UserId: req.body.userId,
          TeamId: req.body.teamId,
          GameId: game.id,
        }
      }).then(userTeam => {
        if (userTeam === null) {
          UserTeam.create({
            UserId: req.body.userId,
            TeamId: req.body.teamId,
            GameId: game.id,
            captain: true,
          }).then(userTeamCreated => {
            console.log(userTeamCreated);
          })
        };
      })
      res.status(200).send({
        auth: true,
        message: "Game Created"
      });
    })
  })
}