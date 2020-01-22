module.exports = (sequelize, DataTypes) => {
    const UserPosition = sequelize.define("UserPosition", {
        position: {
            type: DataTypes.STRING
        }
    });
    return UserPosition;
};