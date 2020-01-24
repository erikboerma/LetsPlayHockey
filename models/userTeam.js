// const Models = require('../sequelize');
const User = require('./user');
const Team = require('./team');

module.exports = (sequelize, DataTypes) => {
    const UserTeam = sequelize.define("UserTeam", {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            },
        },
        teamId: {
            type: DataTypes.INTEGER,
            references: {
                model: Team,
                key: 'id'
            },
        },
        captainId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            },
        },
        position: {
            type: DataTypes.STRING
        },
    });

    return UserTeam;
};