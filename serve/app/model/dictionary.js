'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Dictionary = app.model.define('DICTIONARY', {
    TYPE: { type: STRING(50) },
    CODE: { type: STRING(50) },
    VALUE: { type: STRING(100) },
    SORT_NO: INTEGER,
    DISCRIPTION: INTEGER,
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true,
  });

  return Dictionary;
};
