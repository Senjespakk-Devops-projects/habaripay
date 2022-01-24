const httpStatus = require('http-status');
const errorLogService = require('../services/error_log.service');
const catchAsync = require('../utils/request/catchAsync');
const { abortIf } = require('../utils/request/ApiResponder');
const { successResponse } = require('../utils/request/ApiResponder');

const getAll = catchAsync(async (req, res, next) => {
  const logs = await errorLogService.getPaginated(req);
  abortIf(!logs, httpStatus.NOT_FOUND, 'Error Logs not found');
  return successResponse(res, logs);
});

module.exports = {
  getAll,
};
