const Models = require('../sequelize');
const Game = Models.Game;

module.exports = (app) => {
    app.post('/api/findGame/:id', (req, res) => {        
        Game.create({
            id: req.body.id
        })
    }).then((game) => {
        res.json(game);
    });
};
