module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Teams", {
        teamName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true
            }
        },
        positionsAvailable: DataTypes.INTEGER,
        validate: {
            allowNull: false,
            notEmpty: true,
            max: 15
        },
        location: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true,
            }
        }
    })
    Team.hasMany(User);
    return Team;
}
