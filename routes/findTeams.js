const Models = require('../sequelize');
const Team = Models.Team;
const UserTeam = Models.UserTeam;

module.exports = app => {
    app.post('/findTeams', (req, res) => {
        console.log(`findTeams Req.Body - ${JSON.stringify(req.body)}`)
        UserTeam.findAll({
            where: {
                UserId: req.body.userId
            }
        }).then(userTeam => {
            console.log(userTeam)
            Team.findOne({
                where: {
                    id: userTeam[0].TeamId
                }
            }).then(team => {
                if (team != null) {
                    console.log('teams found in db from findTeams');
                    res.end(JSON.stringify(team));
                } else {
                    console.log('no teams found');
                }
            });
        });
    });
}