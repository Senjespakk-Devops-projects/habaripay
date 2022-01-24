const { paginateOptions } = require('../utils/database');
const { Foobar } = require('../models');

const getPaginated = async (req, options = {}) => {
  return Foobar.findAndCountAll({
    ...options,
    ...paginateOptions(req),
    distinct: true,
  });
};

const createLog = async (data) => {
  return Foobar.create(data);
};

module.exports = {
  getPaginated,
  createLog,
};
