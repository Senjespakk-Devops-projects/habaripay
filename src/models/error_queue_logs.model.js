module.exports = (sequelize, DataTypes) => {
  const ErrorQueueLogs = sequelize.define(
    'ErrorQueueLogs',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      payload: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      error: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // underscored: true,
    }
  );

  ErrorQueueLogs.associate = function (models) {
    // associations can be defined here
  };
  return ErrorQueueLogs;
};

/**
 * @typedef ErrorQueueLogs
 */
