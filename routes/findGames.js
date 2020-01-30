const Models = require('../models');
const Game = Models.Game;
const Team = Models.Team;

module.exports = app => {
    app.get('/findAllGames', (req, res) => {
        Game.findAll({
            include: [{
                model: Team,
            }]
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
