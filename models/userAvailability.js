module.exports = (sequelize, DataTypes) => {
    const UserAvailability = sequelize.define("UserAvailability", {
        monday: {
            type: DataTypes.BOOLEAN,
        },
        tuesday: {
            type: DataTypes.BOOLEAN,
        },
        wednesday: {
            type: DataTypes.BOOLEAN,
        },
        thursday: {
            type: DataTypes.BOOLEAN,
        },
        friday: {
            type: DataTypes.BOOLEAN,
        },
        saturday: {
            type: DataTypes.BOOLEAN,
        },
        sunday: {
            type: DataTypes.BOOLEAN,
        },
    });
    return UserAvailability;
};