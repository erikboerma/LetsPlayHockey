const Models = require('../sequelize');
const Team = Models.Team;

module.exports = app => {
    app.get('/findTeam', (req, res) => {
        Team.findOne({
        }).then(team => {
            if (team != null) {
                console.log('Team found');
                res.end(JSON.stringify(team));
            } else {
                console.log('Team not found');
            }
        });
    });
};
