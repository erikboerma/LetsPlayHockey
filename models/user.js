module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                allowNull: false,
                notEmpty: true
            }
        },
        position: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true
            }
        },
        skill: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true
            }
        },
        availability: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true
            }
        },
        noticeNeeded: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
                notEmpty: true
            }
        },
    });

    return User;
};