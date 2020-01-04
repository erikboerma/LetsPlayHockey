import express from 'express';
import Cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import passport from 'passport';

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

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
require("./routes/registerUser")(app);
require("./routes/loginUser")(app);

const syncOptions = {
    force: true
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
    app.listen(PORT, () => {
        console.log(
            `Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
        );
    });
});

module.exports = app;