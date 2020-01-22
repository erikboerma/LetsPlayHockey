const Models = require('../sequelize');
const Team = Models.Team;

module.exports = (app) => {
    app.get('/api/findTeams', (req, res) => {
        Team.findAll({
        }).then((team) => {
            if (team != null) {
                console.log('teams found in db from findTeams');
                res.end(JSON.stringify(team));
            } else {
                console.log('no teams found');
            }
        });
    });
};
