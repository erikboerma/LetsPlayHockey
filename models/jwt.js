module.exports = (sequelize, DataTypes) => {
    const Jwt = sequelize.define("Jwt", {
        jwt: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
    });
    Jwt.belongsTo(User);
    return Jwt;
};