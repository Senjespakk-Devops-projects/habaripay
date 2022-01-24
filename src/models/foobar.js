module.exports = (sequelize, DataTypes) => {
  const Foobar = sequelize.define(
    'Foobar',
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      // underscored: true,
    }
  );

  Foobar.associate = function (models) {
    // associations can be defined here
  };

  return Foobar;
};

/**
 * @typedef Foobar
 */
