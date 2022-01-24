const httpStatus = require('http-status');
const ApiError = require('../utils/request/ApiError');

const merchantAuth = async (req, res, next) => {
  const { merchant_id } = req.params;
  req.user.role = req.user.roles[merchant_id];

  if (!req.user.role) {
    next(new ApiError(httpStatus.UNAUTHORIZED, 'Merchant Authentication Failed'));
  }

  next();
};

module.exports = merchantAuth;
