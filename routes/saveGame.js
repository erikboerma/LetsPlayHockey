const Models = require('../models');
const UserTeam = Models.UserTeam;

module.exports = app => {
    app.post('/saveGame', (req, res) => {
        console.log(req.body)
        UserTeam.findOne({
            where: {
                UserId: req.body.userId,
                TeamId: req.body.teamId
            }
        }).then(userTeam => {
            console.log(userTeam)
            userTeam.update({
                GameId: req.body.gameId,
                position: req.body.position,
                captain: false
            })
        }).then(game => {
            res.json(game);
        });
    })
};
