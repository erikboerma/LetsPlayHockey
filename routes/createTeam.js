const Models = require("../models");
const Team = Models.Team;
const UserTeam = Models.UserTeam;

module.exports = app => {
  app.post("/createTeam", (req, res, next) => {
    console.log(req.body);
    Team.findOne({
      where: {
        name: req.body.team.teamName
      }
    }).then(team => {
      console.log("Team: " + team);
      if (team === null) {
        Team
          .create({
            name: req.body.team.teamName,
            offense: req.body.team.offense,
            defense: req.body.team.defense,
            goalies: req.body.team.goalies,
          })
          .then(teamCreated => {
            console.log(teamCreated)
            UserTeam.create({
              UserId: req.body.userId,
              TeamId: teamCreated.id,
              captain: true
            }).then(() => {
              console.log("Team added in createTeam route");
              res.status(200).send({
                auth: true,
                message: "Team Added"
              });
            })
          });
      } else {
        console.error("Team already exists in the db");
        res.status(401).send("Team already exists in the db");
      }
    });
  });
};
