// import User from './user';

module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Team", {
        teamName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true
            }
        },
        positionsAvailable: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
                notEmpty: true,
                max: 15
            }
        }
    });

    // Team.hasMany(User);
    return Team;
};
