module.exports = (sequelize, DataTypes) => {
    const UserTeam = sequelize.define("userTeam", {
        user_id: {
            type: DataTypes.INTEGER
        },
        team_id: {
            type: DataTypes.INTEGER
        }
    });
    return UserTeam;
};