const passport = require('passport');
const httpStatus = require('http-status');
const ApiError = require('../utils/request/ApiError');

const setCredentials = (req, user) => (resolve, reject) => {
  req.user = user;
  return resolve();
};

const auth = () => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    return passport.authenticate('jwt', { session: false }, async (err, user, info) => {
      if (err || info || !user) {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, err ? err.message : 'User not authorized'));
      }

      return setCredentials(req, user)(resolve, reject);
    })(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};
module.exports = auth;
