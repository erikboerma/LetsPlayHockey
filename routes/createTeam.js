const Models = require("../sequelize");
const Team = Models.Team;

module.exports = app => {
  app.post("/createTeam", (req, res, next) => {
    console.log(req.body);
    Team.findOne({
      where: {
        name: req.body.teamName
      }
    }).then(team => {
      console.log("Team: " + team);
      if (team === null) {
        Team
          .create({
            name: req.body.teamName,
            offense: req.body.offense,
            defense: req.body.defense,
            goalies: req.body.goalies,
            totalPlayers: req.body.totalPlayers
          })
          .then(() => {
            console.log("team added");
            res.status(200).send({
              auth: true,
              message: "Team Added"
            });
          });
      } else {
        console.error("Team already exists in the db");
        res.status(401).send("Team already exists in the db");
      }
    });
  });
};
