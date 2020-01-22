const Models = require('../sequelize');
const Game = Models.Game;

module.exports = (app) => {
    app.get('/api/findGames', (req, res) => {
        Game.findAll({
        }).then((game) => {
            if (game != null) {
                console.log('teams found in db from findGames');
                res.end(JSON.stringify(game));
            } else {
                console.log('no teams found');
            }
        });
    });
};
