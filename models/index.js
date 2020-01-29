const Sequelize = require('sequelize');
const UserModel = require('./user');
const TeamModel = require('./team');
const GameModel = require('./game');
const UserTeamModel = require('./userTeam');

// const jaws = process.env.JAWSDB_URL || "127.0.0.1";

let sequelize; 
if(process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL) 
} else {
  sequelize = new Sequelize('letsplayhockey', 'root', null, {
    host: "127.0.0.1",
    dialect: "mysql",
  });
}

const User = UserModel(sequelize, Sequelize);
const UserTeam = UserTeamModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);
const Game = GameModel(sequelize, Sequelize);

User.belongsToMany(Team, {
  through: UserTeam,
});

Team.belongsToMany(User, {
  through: UserTeam,
});

Team.hasMany(Game, {
  foreignKey: 'TeamId'
});
Game.belongsTo(Team);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = {
  User,
  Team,
  UserTeam,
  Game
};