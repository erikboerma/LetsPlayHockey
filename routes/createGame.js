const Models = require("../models");
const Game = Models.Game;
const Team = Models.Team;

module.exports = app => {
  app.post("/createGame", (req, res, next) => {
    console.log(req.body);
    Team.findOne({
      where: {
        id: req.body.teamId
      }
    }).then(team => {
      if (team !== null) {
        Game.create({
          location: req.body.location,
          datetime: req.body.datetime,
          // time: req.body.time,
          TeamId: team.id
        }).then(() => {
          res.status(200).send({
            auth: true,
            message: "Game Created"
          });
        })
      }
    })
  })
}