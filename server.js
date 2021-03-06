const express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
const path = require('path');

const app = express();
const API_PORT = process.env.PORT || 3001;

require('./config/passport');

// Middleware
app.use(Cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());
app.use(express.static("public"));
app.use('/static', express.static('public'));

// Routes
require("./routes/createTeam")(app);
require("./routes/createGame")(app);
require("./routes/findGames")(app);
require("./routes/findUser")(app);
require("./routes/loginUser")(app);
require("./routes/registerUser")(app);
require("./routes/saveGame")(app);
require("./routes/updateUser")(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    app.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;