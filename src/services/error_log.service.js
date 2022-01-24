const { paginateOptions } = require('../utils/database');
const { ErrorQueueLogs } = require('../models');

const getPaginated = async (req) => {
  return ErrorQueueLogs.findAll(paginateOptions(req));
};

const createLog = async (data) => {
  return ErrorQueueLogs.create(data, { fields: ['payload', 'error'] });
};

module.exports = {
  getPaginated,
  createLog,
};
