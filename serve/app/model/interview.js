'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Interview = app.model.define('INTERVIEW', {
    ID: { type: INTEGER, unique: true },
    CANDIDATE_ID: INTEGER, // 候选人ID
    INTERVIEWER: STRING, // 面试官／助理
    APPOINTMENT_INTERVIEWER_TIME: DATE, // 预约时间
    ACTUAL_INTERVIEWER_TIME: DATE, // 实际面试时间
    INTERVIEW_ADDRESS: STRING, // 面试地址
    CUSTOMER_MANAGER: STRING, // 客户经理
    ORGANIZATION_CODE: STRING, // 供应商名称CODE／组织名称CODE
    NEED_ORGANIZATION_CODE: STRING, // 需求方组织CODE
    STATUS: INTEGER, // 0未安排面试，1已安排面试
    REMARK: STRING, // 备注
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true, // 表示模型对应当表名与模型名称相同
  });

  Interview.findOne = async function(params) {
    return await this.findOne({
      where: params,
    });
  };

  Interview.queryAll = async function(params) {
    return await this.findAll({
      where: params,
    });
  };

  Interview.add = async function(params) {
    return await this.create(params);
  };

  Interview.change = async function(params, options) {
    return await this.update(params, {
      where: options,
    });
  };

  Interview.delete = async function(options) {
    return await this.destory({
      where: options,
    });
  };

  return Interview;
};
