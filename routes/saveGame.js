const Models = require('../sequelize');
const Game = Models.Game;
const UserTeam = Models.UserTeam;

module.exports = app => {
    app.post('/api/saveGame/', (req, res) => {
        console.log(req.body)
        UserTeam.findOne({
            where: {
                UserId: req.body.userId,
                // TeamId: req.body.teamId
            }
        }).then(userTeam => {
            console.log(userTeam)
            userTeam.update({
                GameId: req.body.gameId
            })
        }).then(game => {
            res.json(game);
        });
    })
};
