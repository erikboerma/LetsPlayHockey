const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const UserAvailabilityModel = require('./models/userAvailability');
const TeamModel = require('./models/team');

const sequelize = new Sequelize('letsplayhockey', 'root', null, {
  host: "127.0.0.1",
  dialect: "mysql",
});

const User = UserModel(sequelize, Sequelize);
const userAvailability = UserAvailabilityModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);

User.hasMany(userAvailability);
userAvailability.belongsTo(User);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = User;
// module.exports = Team;