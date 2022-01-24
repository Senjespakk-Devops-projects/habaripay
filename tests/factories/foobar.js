const faker = require('faker');
const { Foobar } = require('../../src/models');

/**
 * Generate an object which container attributes needed
 * to successfully create a merchant instance.
 *
 * @param  {Object} props Properties to use for the merchant.
 *
 * @return {Object}       An object to build the merchant from.
 */
const data = async (props = {}) => {
  const defaultProps = {
    name: `Sample Product ${faker.datatype.number()}`,
  };
  return { ...defaultProps, ...props };
};

/**
 * Generates a merchant instance from the properties provided.
 *
 * @param  {Object} props Properties to use for the merchant.
 *
 * @return {Object}       A merchant instance
 */
module.exports = async (props = {}) => Foobar.create(await data(props));
