const models = require('../src/models');

const truncate = async () => {
  // await models.Sequelize.drop();
  // return models.Sequelize.sync();
  // return Promise.all(
  //   Object.keys(models).map((key) => {
  //     if (['sequelize', 'Sequelize'].includes(key)) return null;
  //     return models[key].destroy({ where: {}, force: true });
  //   })
  // );
};

module.exports = truncate;
