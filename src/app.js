const express = require('express');
const passport = require('passport');
const httpStatus = require('http-status');
const { jwtStrategy } = require('./config/passport');
const ApiError = require('./utils/request/ApiError');
const v1AuthRoutes = require('./routes/auth/v1.route');
const v1PublicRoutes = require('./routes/public/v1.route');
const { errorConverter, errorHandler } = require('./middlewares/error');

const app = express();

// enable cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, X-Requested-With, Content-Type');

  next();
});

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// Routes
app.use('/v1/auth', v1AuthRoutes); // For logged in users
app.use('/v1/', v1PublicRoutes); // Public routes

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});


// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
