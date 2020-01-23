module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        authToken: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        shot: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        skillLevel: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        notice: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
    });

    

    return User;
};