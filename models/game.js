module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define("Game", {
        location: {
            type: DataTypes.STRING
        },
        datetime: {
            type: DataTypes.DATE
        },
        TeamId: {
            type: DataTypes.INTEGER
        }
    });
    return Game;
};