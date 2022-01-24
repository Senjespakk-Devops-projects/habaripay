module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed commands here.
    await queryInterface.bulkInsert(
      'Foobars',
      [
        {
          name: 'sample name',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'sample name 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Foobars', null, {});
  },
};
