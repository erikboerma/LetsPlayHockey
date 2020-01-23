const Models = require('../sequelize');
const Game = Models.Game;

module.exports = (app) => {
    app.get('/api/findGame', (req, res) => {
        Game.findAll({
            // where: {
            //     id: team.team_id
            // }
        }).then((game) => {
            if (game != null) {
                res.end(JSON.stringify(game));
            } else {
                console.log('no games found');
            }
        });
    });
};