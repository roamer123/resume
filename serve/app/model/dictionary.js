'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Dictionary = app.model.define('DICTIONARY', {
    ID: { type: INTEGER, unique: true },
    TYPE: { type: STRING(50) }, // 类型code
    CODE: { type: STRING(50) }, // 编码
    VALUE: { type: STRING(100) }, // 名称
    SORT_NO: INTEGER, // 排序
    DISCRIPTION: INTEGER, // 描述
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true,
  });

  Dictionary.queryCodeToValue = async function(CODE, options) {
    return await app.model.query('SELECT VALUE FROM DICTIONARY WHERE CODE = :CODE', Object.assign({ replacements: { CODE }, type: app.Sequelize.QueryTypes.SELECT }, options));
  };

  Dictionary.add = async function(field) {
    this.ctx.create(field);
  };

  Dictionary.find = async function(params) {
    return await this.findOne({
      where: params,
      attributes: [ 'ID', 'TYPE', 'CODE', 'VALUE', 'SORT_NO' ],
    });
  };

  Dictionary.query = async function(params) {
    return await this.findAll({
      where: params,
      attributes: [ 'CODE', 'VALUE' ],
    });
  };

  Dictionary.updateDictionary = async function(params, options) {
    return await this.update(params, {
      where: {
        options,
      },
    });
  };

  Dictionary.destory = async function(options) {
    return await this.destroy(options);
  };

  return Dictionary;
};
