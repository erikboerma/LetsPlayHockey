const Models = require('../models');
const Game = Models.Game;

module.exports = app => {
    app.get('/findAllGames', (req, res) => {
        Game.findAll({
        }).then(game => {
            if (game !== null) {
                console.log('teams found in db from findGames');
                res.json(game);
            } else {
                console.log('no teams found');
            }
        });
    });
};
