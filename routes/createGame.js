const Models = require("../models");
const Game = Models.Game;
const Team = Models.Team;

module.exports = app => {
  app.post("/createGame", (req, res, next) => {
    console.log(req.body);
    Team.findOne({
      where: {
        name: req.body.game.teamName
      }
    }).then(team => {
      if (team === null) {
        Game.create({
          location: req.body.game.location,
          date: req.body.game.date,
          time: req.body.game.time

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