const Models = require("../sequelize");
const Game = Models.Game;

module.exports = app => {
  app.post("/createGame", (req, res, next) => {
    console.log(req.body);
    Game
      .create({
        name: req.body.teamName,
        offense: req.body.offense,
        defense: req.body.defense,
        goalies: req.body.goalies,
        totalPlayers: req.body.totalPlayers
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