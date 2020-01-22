module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Team", {
        name: {
            type: DataTypes.STRING,
            validate: {
                // allowNull: false,
                notEmpty: true
            }
        },
        offense: {
            type: DataTypes.INTEGER
        },
        defense: {
            type: DataTypes.INTEGER
        },
        goalies: {
            type: DataTypes.INTEGER
        },
        totalPlayers: {
            type: DataTypes.INTEGER,
            validate: {
                // allowNull: false,
                notEmpty: true,
                max: 15
            }
        },
    });
    return Team;
};
