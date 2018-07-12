'use strict';

module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const Candidate = app.model.define('CANDIDATE', {
    NAME: { type: STRING(20) },
    TECHNOLOGY_DIRECTION_CODE: { type: STRING(50) },
    WORK_AGE: { type: STRING(10) },
    OFFICIAL_ACADEMIC_CODE: { type: STRING(10) },
    RANK_LEVEL_CODE: { type: STRING(10) },
    TELEPHONE: { type: STRING(20) },
    EMAIL: { type: STRING(20) },
    CURRENT_SALARY: { type: STRING(20) },
    EXPECT_SALARY: { type: STRING(20) },
    IS_ON_JOB: { type: STRING(10) },
    ADDRESS: { type: STRING(100) },
    INTERVIEWER_PROCESS_CODE: { type: STRING(20) },
    INTERVIEWER_STATUS: { type: STRING(20) },
    ORGANIZATION_CODE: { type: STRING(50) },
    INTERVIEWER: { type: STRING(20) },
    INNER_INTERVIEWER_TIME: DATE,
    APPOINTMENT_INTERVIEWER_TIME: DATE,
    ACTUAL_INTERVIEWER_TIME: DATE,
    COMPUTER_EXAME_TIME: DATE,
    APPINT_ENTRANCE_TIME: DATE,
    ACTUAL_ENTRANCE_TIME: DATE,
    CHECK_RANK_LEVEL_CODE: { type: STRING(20) },
    RECOMMEND_TIME: DATE,
    RECRUIT_TRACKER: { type: STRING(20) },
    RECOMMEND_PROGRAME: { type: STRING(20) },
    INTERVIEW_ADDRESS: { type: STRING(100) },
    CUSTOMER_MANAGER: { type: STRING(20) },
    REMARK: { type: STRING(200) },
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true,
  });

  Candidate.insertCandidate = async function(params) {
    return await this.create(params);
  };

  return Candidate;
};
