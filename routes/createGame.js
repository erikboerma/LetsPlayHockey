const Models = require("../models");
const Game = Models.Game;

module.exports = app => {
  app.post("/createGame", (req, res, next) => {
    console.log(req.body);
    Game
      .create({
        location: req.body.game.location,
        date: req.body.game.date,
        time: req.body.game.time,
        TeamId: req.body.TeamId,
      })
      .then(() => {
        console.log("Game Created");
        res.status(200).send({
          auth: true,
          message: "Game Created"
        });
      });
  });
};