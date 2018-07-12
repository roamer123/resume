'use strict';

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const Candidate = app.model.define('CANDIDATE', {
    NAME: { type: STRING(20) }, // 姓名
    TECHNOLOGY_DIRECTION_CODE: { type: STRING(50) }, // 技术方向code
    WORK_AGE: { type: STRING(10) }, // 工作年限
    OFFICIAL_ACADEMIC_CODE: { type: STRING(10) }, // 最高学历
    RANK_LEVEL_CODE: { type: STRING(10) }, // 级别code
    TELEPHONE: { type: STRING(20) }, // 电话
    EMAIL: { type: STRING(20) }, // 邮箱
    CURRENT_SALARY: { type: STRING(20) }, // 目前薪资（税前）
    EXPECT_SALARY: { type: STRING(20) }, // 期望薪资
    IS_ON_JOB: { type: STRING(10) }, // 是否在职0:否，1:是
    ADDRESS: { type: STRING(100) }, // 地点
    INTERVIEWER_PROCESS_CODE: { type: STRING(20) }, // 目前进度code
    INTERVIEWER_STATUS: { type: STRING(20) }, // 状态
    ORGANIZATION_CODE: { type: STRING(50) }, // 供应商／需求方code
    INTERVIEWER: { type: STRING(20) }, // 面试官／助理
    INNER_INTERVIEWER_TIME: DATE, // 内面时间
    APPOINTMENT_INTERVIEWER_TIME: DATE, // 预约面试时间
    ACTUAL_INTERVIEWER_TIME: DATE, // 实际面试时间
    COMPUTER_EXAME_TIME: DATE, // 机考时间
    APPINT_ENTRANCE_TIME: DATE, // 约定入场时间
    ACTUAL_ENTRANCE_TIME: DATE, // 实际入场时间
    CHECK_RANK_LEVEL_CODE: { type: STRING(20) }, // 核定级别code
    RECOMMEND_TIME: DATE, // 推荐时间
    RECRUIT_TRACKER: { type: STRING(20) }, // 招聘跟踪人
    RECOMMEND_PROGRAME: { type: STRING(20) }, // 推荐项目
    INTERVIEW_ADDRESS: { type: STRING(100) }, // 面试地址
    CUSTOMER_MANAGER: { type: STRING(20) }, // 客户经理
    REMARK: { type: STRING(200) }, // 备注
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true,
  });

  // static method
  Candidate.add = async function(field) {
    this.ctx.create(field);
  };

  Candidate.queryCandidate = async function(params) {
    return await this.findOne({
      where: params,
      attributes: [ 'ID', 'NAME', 'TECHNOLOGY_DIRECTION_CODE', 'WORK_AGE', 'OFFICIAL_ACADEMIC_CODE', 'RANK_LEVEL_CODE', 'TELEPHONE', 'EMAIL', 'CURRENT_SALARY', 'EXPECT_SALARY', 'IS_ON_JOB', 'ADDRESS', 'INTERVIEWER_PROCESS_CODE', 'INTERVIEWER_STATUS', 'ORGANIZATION_CODE', 'INTERVIEWER', 'INNER_INTERVIEWER_TIME', 'APPOINTMENT_INTERVIEWER_TIME', 'ACTUAL_INTERVIEWER_TIME', 'COMPUTER_EXAME_TIME', 'APPINT_ENTRANCE_TIME', 'ACTUAL_ENTRANCE_TIME', 'CHECK_RANK_LEVEL_CODE', 'RECOMMEND_TIME', 'RECRUIT_TRACKER', 'RECOMMEND_PROGRAME', 'INTERVIEW_ADDRESS', 'CUSTOMER_MANAGER', 'REMARK' ],
    });
  };

  Candidate.updateCandidate = async function(params, options) {
    return await this.update(params, {
      where: {
        options,
      },
    });
  };

  Candidate.destory = async function(options) {
    return await this.destroy(options);
  };

  Candidate.query = async function(sql) {
    return await this.query(sql);
  };

  return Candidate;
};
