// const Models = require('../sequelize');
const User = require('./user');
const Team = require('./team');

module.exports = (sequelize, DataTypes) => {
    const UserTeam = sequelize.define("UserTeam", {
        UserId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            },
        },
        TeamId: {
            type: DataTypes.INTEGER,
            references: {
                model: Team,
                key: 'id'
            },
        },
        captain: {
            type: DataTypes.BOOLEAN,
        },
        position: {
            type: DataTypes.STRING
        },
    });

    return UserTeam;
};