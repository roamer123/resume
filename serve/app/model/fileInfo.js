'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const FileInfo = app.model.define('FILE_INFO', {
    CANDIDATE: INTEGER,
    FILE_NAME: { type: STRING(50) },
    FILE_TYPE: { type: STRING(20) },
    FILE_URL: { type: STRING(100) },
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true,
  });

  return FileInfo;
};
