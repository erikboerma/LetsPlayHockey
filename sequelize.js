const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const TeamModel = require('./models/team');
const GameModel = require('./models/game');
const UserPositionsModel = require('./models/userPositions');
const UserTeamModel = require('./models/userTeam');

const sequelize = new Sequelize('letsplayhockey', 'root', null, {
  host: "127.0.0.1",
  dialect: "mysql",
});

const User = UserModel(sequelize, Sequelize);
const UserPosition = UserPositionsModel(sequelize, Sequelize);
const UserTeam = UserTeamModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);

User.hasOne(UserPosition);
Team.hasOne(UserPosition)
UserPosition.belongsTo(User);
UserPosition.belongsTo(Team);

// This will automatically create a helper table with fields (UserId, TeamId)
// User.belongsToMany(Team, {
//   through: "userTeams"
// })

Team.hasMany(Game);


sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = { User, Team, UserTeam, UserPosition, Game };