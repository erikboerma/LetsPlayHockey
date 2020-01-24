const Models = require('../sequelize');
const Team = Models.Team;
const User = Models.User;
const UserTeam = Models.UserTeam;

module.exports = app => {
    app.post('/findTeams', (req, res) => {
        console.log(req.body.userId);

        User.findAll({
            where: {
                id: req.body.userId
            },
            include: [{
                model: Team,
                as: 'Teams',
                through: {
                    model: UserTeam,
                    as: 'userTeams',
                    attributes: ['TeamId', 'UserId']
                }
            }]
        }).then(userTeam => {
            console.log(userTeam)
            if (userTeam != null) {
                console.log('teams found in db from findTeams');
                res.json(userTeam);
            } else {
                console.log('no teams found');
            }
        });
    })
}
