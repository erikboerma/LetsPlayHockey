module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Team", {
        teamName: {
            type: DataTypes.STRING,
            validate: {
                // allowNull: false,
                notEmpty: true
            }
        },
        positionsAvailable: {
            type: DataTypes.INTEGER,
            validate: {
                // allowNull: false,
                notEmpty: true,
                max: 15
            }
        },
        location: {
            type: DataTypes.STRING,
            validate: {
                // allowNull: false,
                notEmpty: true,
            }
        },
        date: {
            type: DataTypes.DATE,
        },
        time: {
            type: DataTypes.TIME,
        }
    });
    Team.associate = (models) => {
        Team.hasMany(models.User,
            {
                as: 'Team',
            })
    };
    return Team;
};
