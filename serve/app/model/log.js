'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Log = app.model.define('LOG', {
    ID: INTEGER,
    OPERATION_CODE: STRING, // 操作者CODE
    OPERATION_NAME: STRING, // 操作者名称
    OPERATION_TYPE: STRING, // 操作类别
    OPERATION_DATE: DATE, // 操作时间
    OPERATION_LOG: STRING, // 操作日志
    REMARK1: STRING, // 备注
    REMARK2: STRING, // 备注2
    CREATED_BY: STRING,
    UPDATED_BY: STRING,
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true, // 表示模型对应当表名与模型名称相同
  });

  Log.queryLog = async function(params) {
    console.log('query log params....' + JSON.stringify(params));
    return await this.findOne({
      where: params,
    //   attributes: [ 'ID', 'OPERATION_CODE', 'OPERATION__NAME' ],
    });
  };

  Log.insertLog = async function(params) {
    console.log('insert log params....' + JSON.stringify(params));
    return await this.create(params);
  };

  Log.updateLog = async function(params, options) {
    console.log('updateLog: ' + JSON.stringify(options));
    return await this.update(params, options);
  };

  Log.deleteLog = async function(options) {
    console.log('deleteLog: ' + JSON.stringify(options));
    return await this.destroy({
      where: options,
    });
  };


  return Log;
};
