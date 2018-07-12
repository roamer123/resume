'use strict';
const Controller = require('egg').Controller;

class generateDataController extends Controller {

  // 批量查入candidate表数据
  async insertCandidate() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const insertParams = {};
    let insertResult = null;
    const TECHNOLOGY_DIRECTION_CODES = [ 'WEBFRONT', 'HTML5', 'NODEJS', 'JAVASCRIPT', 'ANDROID' ];
    const OFFICIAL_ACADEMIC_CODES = [ 'LESS_JUNIOR', 'JUNIOR', 'BACHELOR', 'MASTER', 'OVER_MASTER' ];
    const RANK_LEVEL_CODES = [ 'LEVEL_ASSISTANT', 'LEVEL_PRIMARY', 'LEVEL_MIDDLE', 'LEVEL_HIGH', 'LEVEL_HIGH' ];
    const INTERVIEWER_STATUSS = [ 'STATUS_NO_NEED', 'STATUS_NO_PASS', 'STATUS_HIGHPAY', 'STATUS_GIVEUP', 'STATUS_DOING' ];
    const INTERVIEWER_PROCESS_CODES = [ 'PROCESS_NEW', 'PROCESS_FIRST', 'PROCESS_SELF', 'PROCESS_CUSTOME', 'PROCESS_INTERVIEW' ];
    const ORGANIZATION_CODES = [ 'SUPPLIER_WSHH', 'SUPPLIER_WSHH', 'SUPPLIER_WSHH', 'SUPPLIER_ZR', 'SUPPLIER_FB' ];

    for (let i = 1; i <= 10; i++) {
      const random = Math.floor(Math.random() * 4);
      console.log('random: ' + random);
      insertParams.id = i;
      insertParams.NAME = 'WJQ';
      insertParams.TECHNOLOGY_DIRECTION_CODE = TECHNOLOGY_DIRECTION_CODES[random];
      insertParams.WORK_AGE = 3;
      insertParams.OFFICIAL_ACADEMIC_CODE = OFFICIAL_ACADEMIC_CODES[random];
      insertParams.RANK_LEVEL_CODE = RANK_LEVEL_CODES[random];
      insertParams.TELEPHONE = '18812345678';
      insertParams.EMAIL = '188123456789@163.cpm';
      insertParams.CURRENT_SALARY = '10000000';

      insertParams.EXPECT_SALARY = '2000000000';
      insertParams.IS_ON_JOB = '0';
      insertParams.ADDRESS = '上海市唐镇';
      insertParams.INTERVIEWER_PROCESS_CODE = INTERVIEWER_PROCESS_CODES[random];
      insertParams.INTERVIEWER_STATUS = INTERVIEWER_STATUSS[random];

      insertParams.ORGANIZATION_CODE = ORGANIZATION_CODES[random];
      insertParams.INTERVIEWER = 'lulu';
      insertParams.INNER_INTERVIEWER_TIME = null;
      insertParams.APPOINTMENT_INTERVIEWER_TIME = null;
      insertParams.ACTUAL_INTERVIEWER_TIME = null;

      insertParams.COMPUTER_EXAME_TIME = null;
      insertParams.APPINT_ENTRANCE_TIME = null;
      insertParams.ACTUAL_ENTRANCE_TIME = null;
      insertParams.CHECK_RANK_LEVEL_CODE = RANK_LEVEL_CODES[random];
      insertParams.ACTUAL_INTERVIEWER_TIME = null;

      insertParams.RECOMMEND_TIME = null;
      insertParams.RECRUIT_TRACKER = 'xinge';
      insertParams.RECOMMEND_PROGRAME = 'dbox';

      insertResult = await ctx.service.candidateService.insert(insertParams);
    }
    console.log('insert result ' + JSON.stringify(insertResult));
    ctx.body = insertResult;
  }


}
module.exports = generateDataController;

