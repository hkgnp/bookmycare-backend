// Set up base dependencies
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
require('dotenv').config();
const session = require('connect-flash');
const flash = require('connect-flash');
const csurf = require('csurf');
const moment = require('moment');

// Create instance of express app
const app = express();

// set the view engine
app.set('view engine', 'hbs');

// static folder
app.use(express.static('public'));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// date time
hbs.registerHelper('dateFormat', function (date, options) {
  const formatToUse =
    (arguments[1] && arguments[1].hash && arguments[1].hash.format) ||
    'DD/MM/YYYY';
  return moment(date).format(formatToUse);
});

// enable forms
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Create sessions
app.use(
  session({
    // Secret key for the session. Needs to be complex.
    secret: process.env.SESSION_SECRET_KEY,
    // Will not resave the session if there are no changes to the session
    resave: false,
    // If a user comes in without a session, immediately create one
    saveUninitialized: true,
  })
);

// Middlewares
// User session middleware
// app.use((req, res, next) => {
//   res.locals.user = req.session.user;
//   next();
// });

// Set up flash
// app.use(flash());

// Flash messages middleware
// app.use((req, res, next) => {
//   // Inject success and error messages into the hbs file
//   res.locals.success_messages = req.flash('success_messages');
//   res.locals.error_messages = req.flash('error_messages');
//   next();
// });

// Set up csurf
// Create instance of csurf to only be used in some circumstances
// const csurfInstance = csurf();

// Routes
const landingRoutes = require('./routes/landingRoutes');

// Main function
(() => {
  app.use('/', landingRoutes);
})();

// Set server port
const portNumber = 7000;
app.listen(process.env.PORT || portNumber, () =>
  console.log('Server is running on port ' + portNumber)
);
