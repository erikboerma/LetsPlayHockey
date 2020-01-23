const Models = require('../sequelize');
const Team = Models.Team;
const User = Models.User;

module.exports = app => {
    app.get('/findTeams', (req, res) => {

        Team.findAll({
            include: [{
                model: User,
                as: 'users',
                attributes: ['id'],
                through: {
                    model: 'UserTeams',
                    as: 'userTeams',
                    attributes: ['TeamId']
                }
            }]
        }).then(userTeam => {
            console.log(userTeam)
            if (userTeam != null) {
                console.log('teams found in db from findTeams');
                res.end(JSON.stringify(userTeam));
            } else {
                console.log('no teams found');
            }
        });
    })
}
