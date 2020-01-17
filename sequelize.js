const Sequelize = require('sequelize');
const UserModel = require('./models/user');
<<<<<<< HEAD
const TeamModel = require('./models/teams');
=======
const TeamModel = require('./models/team');
>>>>>>> origin

const sequelize = new Sequelize('letsplayhockey', 'root', null, {
  host: "127.0.0.1",
  dialect: "mysql",
});

const User = UserModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = User;
module.exports = Team;