const Models = require('../sequelize');
const Game = Models.Game;

module.exports = (app) => {
    app.put('/api/findGame/:id', (req, res) => {
        let id = req.params.id;
        Game.findByIdAndUpdate(id, { $set: { save: true } })
    }).then((game) => {
        res.json(game);
    });
};
