module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define("Game", {
        team_id : {
            type: DataTypes.INTEGER
        },
        location: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATEONLY
        },
        time: {
            type: DataTypes.TIME
        }
    });
    return Game;
};