'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Position = app.model.define('POSITION', {
    ID: { type: INTEGER, unique: true },
    TECHNOLOGY_DIRECTION_CODE: STRING, // 职位名称code
    NEED_ORGANIZATION_CODE: STRING, // 需求方code
    JOB_CATEGORY_CODE: STRING, // 工作性质code
    JOB_CATEGORY_CODE_NAME: STRING, // 工作性质name
    JOB_EXPERIENCE_DEMAND_CODE: STRING, // 工作经验要求
    EDUCATION_LEVEL_CODE: STRING, // 学历要求
    SALARY_DEMAND: STRING, // 薪资要求
    LATEST_COME_TIME: DATE, // 最迟到岗时间
    PRINCIPAL: STRING, // 负责人
    COOPERATOR: STRING, // 协作者
    STARTOR: STRING, // 启动者
    JOB_DESC: STRING, //
    REMARK: STRING, // 冗余字段
    NUMBER: INTEGER, // 招聘人数
    RANK_LEVEL_CODE: STRING, // 招聘职级code
    POSITION_PROCESS_CODE: STRING, // 招聘状态code:0:招聘中，1：招聘结束
    CREATED_BY: STRING,
    UPDATED_BY: STRING,
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true, // 表示模型对应当表名与模型名称相同
  });

  // 查所有记录
  Position.queryPosition = async function() {
    return await this.findAll(Object.assign({
      limit: 200,
      attributes: [ 'ID', 'TECHNOLOGY_DIRECTION_CODE', 'NEED_ORGANIZATION_CODE', 'JOB_CATEGORY_CODE', 'JOB_CATEGORY_CODE_NAME', 'JOB_EXPERIENCE_DEMAND_CODE',
        'EDUCATION_LEVEL_CODE', 'SALARY_DEMAND', 'LATEST_COME_TIME', 'PRINCIPAL', 'COOPERATOR', 'STARTOR', 'JOB_DESC', 'REMARK', 'NUMBER', 'RANK_LEVEL_CODE', 'POSITION_PROCESS_CODE',
        'CREATED_BY', 'UPDATED_BY' ],
    }));
  };

  Position.queryPositionList = async function(params) {
    return await this.findAll({
      where: params,
      limit: 200,
      attributes: [ 'ID', 'TECHNOLOGY_DIRECTION_CODE', 'NEED_ORGANIZATION_CODE', 'JOB_CATEGORY_CODE', 'JOB_CATEGORY_CODE_NAME', 'JOB_EXPERIENCE_DEMAND_CODE',
        'EDUCATION_LEVEL_CODE', 'SALARY_DEMAND', 'LATEST_COME_TIME', 'PRINCIPAL', 'COOPERATOR', 'STARTOR', 'JOB_DESC', 'REMARK', 'NUMBER', 'RANK_LEVEL_CODE', 'POSITION_PROCESS_CODE',
        'CREATED_BY', 'UPDATED_BY' ],
    });
  };

  Position.countPosition = async function(options) {
    return await this.count(options);
  };

  Position.insertPosition = async function(params) {
    return await this.create(params);
  };

  Position.updatePosition = async function(params, options) {
    return await this.update(params, options);
  };

  Position.deletePosition = async function(options) {
    return await this.destroy({
      where: options,
    });
  };


  return Position;
};
