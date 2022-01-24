const sequelize = require('sequelize');
const httpStatus = require('http-status');
const config = require('../config/config');
const ApiError = require('../utils/request/ApiError');
const { errorResponse } = require('../utils/request/ApiResponder');

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError || error instanceof sequelize.Error)) {
    const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  console.log(err);
  return errorResponse(res, message, statusCode, config.env === 'development' && { stack: err.stack });
};

module.exports = {
  errorConverter,
  errorHandler,
};
