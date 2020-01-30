const Models = require('../models');
const UserTeam = Models.UserTeam;

module.exports = app => {
    app.post('/saveGame', (req, res) => {
        console.log('Req Body - ' + JSON.stringify(req.body));
        UserTeam.findOne({
            where: {
                UserId: req.body.userId,
                TeamId: req.body.teamId,
                GameId: req.body.gameId
            }
        }).then(userTeam => {
            console.log(userTeam)
            if (userTeam === null) {
                UserTeam.create({
                    UserId: req.body.userId,
                    TeamId: req.body.teamId,
                    GameId: req.body.gameId,
                    position: req.body.position,
                    captain: false
                });
            };
        }).then(game => {
            res.json(game);
        });
    })
};