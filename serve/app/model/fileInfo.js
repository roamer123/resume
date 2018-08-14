'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const FileInfo = app.model.define('FILE_INFO', {
    ID: { type: INTEGER, unique: true },
    CANDIDATE_ID: INTEGER, // 候选人ID
    FILE_NAME: { type: STRING(50) }, // 文件名
    FILE_TYPE: { type: STRING(20) }, // 文件类型
    FILE_URL: { type: STRING(100) }, // 文件路径
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true,
  });

  FileInfo.addFileInfo = async function(field) {
    this.create(field);
  };

  FileInfo.queryFileInfo = async function(params) {
    return await this.findOne({
      where: params,
      attributes: [ 'ID', 'CANDIDATE_ID', 'FILE_NAME', 'FILE_TYPE', 'FILE_URL' ],
    });
  };

  FileInfo.updateFileInfo = async function(params, options) {
    return await this.update(params, {
      where: options,
    });
  };

  FileInfo.destory = async function(options) {
    return await this.destroy(options);
  };

  return FileInfo;
};
