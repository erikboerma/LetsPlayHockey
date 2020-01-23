module.exports = (sequelize, DataTypes) => {
    const UserTeam = sequelize.define("UserTeam", {
        UserId: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        TeamId: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true
            }
        },
    });

    return UserTeam;
};