const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const TeamModel = require('./models/team');
const GameModel = require('./models/game');
const UserTeamModel = require('./models/userTeam');

// const UserPositionsModel = require('./models/userPositions');

const sequelize = new Sequelize('letsplayhockey', 'root', null, {
  host: "127.0.0.1",
  dialect: "mysql",
});

const User = UserModel(sequelize, Sequelize);
// const UserPosition = UserPositionsModel(sequelize, Sequelize);
const UserTeam = UserTeamModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);

// User.hasOne(UserPosition);
// Team.hasOne(UserPosition)
// UserPosition.belongsTo(User);
// UserPosition.belongsTo(Team);



// const UserTeamModel = sequelize.define("UserTeam", {
//   userId: {
//     type: Sequelize.DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'id'
//     },
//   },
//   teamId: {
//     type: Sequelize.DataTypes.INTEGER,
//     references: {
//       model: Team,
//       key: 'id'
//     },
//   },
// });

User.belongsToMany(Team, {
  through: UserTeam,
});

Team.belongsToMany(User, {
  through: UserTeam,
});


Team.hasMany(Game);
// Game.belongToOne(Team);


sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = {
  User,
  Team,
  // UserPosition,
  UserTeam,
  Game
};