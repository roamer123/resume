'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Candidate = app.model.define('CANDIDATE', {
    ID: { type: INTEGER, unique: true },
    AGE: { type: INTEGER }, // 年龄
    NAME: { type: STRING(20) }, // 姓名
    TECHNOLOGY_DIRECTION_CODE: { type: STRING(50) }, // 技术方向code
    WORKING_YEARS_CODE: { type: STRING(10) }, // 工作年限
    EDUCATION_LEVEL_CODE: { type: STRING(10) }, // 最高学历
    RANK_LEVEL_CODE: { type: STRING(10) }, // 级别code
    TELEPHONE: { type: STRING(20) }, // 电话
    EMAIL: { type: STRING(20) }, // 邮箱
    CURRENT_SALARY: { type: STRING(20) }, // 目前薪资（税前）
    EXPECT_SALARY: { type: STRING(20) }, // 期望薪资
    IS_ON_JOB: { type: STRING(10) }, // 是否在职0:否，1:是
    DOMICILE: { type: STRING(100) }, // 地点
    INTERVIEWER_PROCESS_CODE: { type: STRING(20) }, // 目前进度code
    INTERVIEWER_STATUS: { type: STRING(20) }, // 状态
    ORGANIZATION_CODE: { type: STRING(50) }, // 供应商code
    NEED_ORGANIZATION: { type: STRING(50) }, // 需求方code
    INTERVIEWER: { type: STRING(20) }, // 面试官／助理
    INNER_INTERVIEWER_TIME: DATE, // 内面时间
    COMPUTER_EXAME_TIME: DATE, // 机考时间
    APPINT_ENTRANCE_TIME: DATE, // 约定入场时间
    ACTUAL_ENTRANCE_TIME: DATE, // 实际入场时间
    CHECK_RANK_LEVEL_CODE: { type: STRING(20) }, // 核定级别code
    RECOMMEND_TIME: DATE, // 推荐时间
    RECRUIT_TRACKER: { type: STRING(20) }, // 招聘跟踪人
    RECOMMEND_PROGRAME: { type: STRING(20) }, // 推荐项目
    CUSTOMER_MANAGER: { type: STRING(20) }, // 客户经理
    REMARK: { type: STRING(200) }, // 备注
    NEED_ORGANIZATION_CODE: { type: STRING(20) }, // 需求方code
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true,
  });

  // static method
  Candidate.add = async function(field) {
    return await this.create(field);
  };

  Candidate.queryCandidate = async function(params) {
    return await this.findAll(Object.assign({
      where: params,
      limit: 200,
      attributes: [ 'ID', 'NAME', 'AGE', 'TECHNOLOGY_DIRECTION_CODE', 'WORKING_YEARS_CODE', 'EDUCATION_LEVEL_CODE', 'RANK_LEVEL_CODE', 'TELEPHONE', 'EMAIL', 'CURRENT_SALARY', 'EXPECT_SALARY', 'IS_ON_JOB', 'DOMICILE', 'INTERVIEWER_PROCESS_CODE', 'INTERVIEWER_STATUS', 'ORGANIZATION_CODE', 'INTERVIEWER', 'INNER_INTERVIEWER_TIME', 'COMPUTER_EXAME_TIME', 'APPINT_ENTRANCE_TIME', 'ACTUAL_ENTRANCE_TIME', 'CHECK_RANK_LEVEL_CODE', 'RECOMMEND_TIME', 'RECRUIT_TRACKER', 'RECOMMEND_PROGRAME', 'CUSTOMER_MANAGER', 'REMARK', 'NEED_ORGANIZATION_CODE' ],
    }));
  };

  Candidate.updateCandidate = async function(params, options) {
    return await this.update(params, options);
  };

  Candidate.destory = function({ IDS }) {
    return app.model.transaction(t => {
      return IDS && IDS.reduce(async (promise, ID) => {
        return promise.then(async () => {
          await this.destroy({
            where: {
              ID,
            },
          }, {
            transaction: t,
          });
          return Promise.resolve();
        });

      }, Promise.resolve());
    }).then(() => {
      return true;
    }).catch(err => {
      console.log(err);
      return false;
    });
  };

  Candidate.countCandidate = async function(options) {
    return await this.count(options);
  };

  Candidate.deleteCandidate = async function(options) {
    return await this.destroy({
      where: options,
    });
  };

  Candidate.queryInitInterview = async function({ ORGANIZATION_CODE }) {
    return app.model.query('select NAME,NEED_ORGANIZATION_CODE,CUSTOMER_MANAGER,RECRUIT_TRACKER from CANDIDATE where ORGANIZATION_CODE = ? ', { replacements: [ ORGANIZATION_CODE ], type: app.Sequelize.QueryTypes.SELECT });
  };

  Candidate.queryInitExam = async function({ ORGANIZATION_CODE }) {
    return app.model.query('select NAME,NEED_ORGANIZATION_CODE,CUSTOMER_MANAGER,RECRUIT_TRACKER,COMPUTER_EXAME_TIME,RANK_LEVEL_CODE from  CANDIDATE where ORGANIZATION_CODE = ? ', { replacements: [ ORGANIZATION_CODE ], type: app.Sequelize.QueryTypes.SELECT });
  };

  Candidate.queryIn = async function({ ORGANIZATION_CODE }) {
    return app.model.query('select NAME,NEED_ORGANIZATION_CODE,CUSTOMER_MANAGER,RECRUIT_TRACKER,APPINT_ENTRANCE_TIME,ACTUAL_ENTRANCE_TIME,RANK_LEVEL_CODE from CANDIDATE where ORGANIZATION_CODE = ? ', { replacements: [ ORGANIZATION_CODE ], type: app.Sequelize.QueryTypes.SELECT });
  };

  Candidate.changeList = function({ IDS, INTERVIEWER_PROCESS_CODE }) {
    return app.model.transaction(t => {
      return IDS.reduce(async (promise, ID) => {
        return promise.then(async () => {
          await Candidate.update({
            INTERVIEWER_PROCESS_CODE,
          }, {
            where: {
              ID,
            },
          }, {
            transaction: t,
          });

          return Promise.resolve();
        });

      }, Promise.resolve());
    }).then(() => {
      return true;
    }).catch(err => {
      console.log(err);
      return false;
    });
  };

  return Candidate;
};
