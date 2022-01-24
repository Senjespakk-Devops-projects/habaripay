const moment = require('moment');
const jwt = require('jsonwebtoken');
const { tokenTypes } = require('../../config/tokens');
const config = require('../../config/config');

/**
 * Generate token
 * @param {Object} data
 * @param {Moment} expires
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (data, expires, type, secret = config.jwt.secret) => {
  const payload = {
    sub: data,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };
  return jwt.sign(payload, secret);
};

/**
 * Generate auth tokens
 * @param user
 * @param roles
 * @returns {Promise<Object>}
 */
const generateAuthTokens = async (user, roles = {}) => {
  const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
  const accessToken = generateToken({ ...user, roles }, accessTokenExpires, tokenTypes.ACCESS);

  const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
  const refreshToken = generateToken({ ...user, roles }, refreshTokenExpires, tokenTypes.REFRESH);

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate(),
    },
    refresh: {
      token: refreshToken,
      expires: refreshTokenExpires.toDate(),
    },
  };
};


module.exports = { generateToken, generateAuthTokens };
