const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const TeamModel = require('./models/team');
const GameModel = require('./models/game');
const UserAvailabilityModel = require('./models/userAvailability');
// const UserTeamModel = require('./models/userTeam');

const sequelize = new Sequelize('letsplayhockey', 'root', null, {
  host: "127.0.0.1",
  dialect: "mysql",
});

// Source Models
const User = UserModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);

// Target Models
const UserAvailability = UserAvailabilityModel(sequelize, Sequelize);
// const userTeam = UserTeamModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);

User.hasOne(UserAvailability);
UserAvailability.belongsTo(User);

// This will automatically create a helper table with fields (UserId, TeamId)
User.belongsToMany(Team, {
  through: "userTeams"
})

Team.hasMany(Game);


sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = { User, Team, UserAvailability, Game };