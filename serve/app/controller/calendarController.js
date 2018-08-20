'use strict';

const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class CalendarController extends Controller {
  async initInterview() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ORGANIZATION_CODE, RANGE_DATE, STATE, QUERY } = Object.keys(params).length === 0 ? {} : params;
    const queryParams = this.calenderQueryHander('STATUS', 'INTERVIEWEE', ORGANIZATION_CODE, RANGE_DATE, STATE, QUERY);
    const calendarResult = await ctx.service.calendarService.initInterview(queryParams);
    ctx.body = ReturnJson.success(calendarResult);
  }

  async initExam() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ORGANIZATION_CODE, RANGE_DATE, STATE, QUERY } = Object.keys(params).length === 0 ? {} : params;
    const queryParams = Object.assign({
      INTERVIEWER_PROCESS_CODE: 'PROCESS_TEST',
    }, this.calenderQueryHander('SUB_STATUS', 'NAME', ORGANIZATION_CODE, RANGE_DATE, STATE, QUERY));
    const calendarResult = await ctx.service.calendarService.initExam(queryParams);
    ctx.logger.info('calender initExam response data: %j', calendarResult);

    ctx.body = ReturnJson.success(calendarResult);
  }

  async initIn() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ORGANIZATION_CODE, RANGE_DATE, STATE, QUERY } = Object.keys(params).length === 0 ? {} : params;
    const queryParams = Object.assign({
      INTERVIEWER_PROCESS_CODE: 'PROCESS_PASS',
    }, this.calenderQueryHander('SUB_STATUS', 'NAME', ORGANIZATION_CODE, RANGE_DATE, STATE, QUERY));
    const calendarResult = await ctx.service.calendarService.initIn(queryParams);
    ctx.body = ReturnJson.success(calendarResult);

  }

  async add() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ORGANIZATION_CODE, INTERVIEWER_PROCESS_CODE, NAME, APPOINTMENT_INTERVIEWER_TIME, ADDRESS, INTERVIEWER
      , CHECK_RANK_LEVEL_CODE, COMPUTER_EXAME_TIME, APPINT_ENTRANCE_TIME } = params;
    const addParams = {
      ORGANIZATION_CODE,
      INTERVIEWER_PROCESS_CODE,
      NAME,
      APPOINTMENT_INTERVIEWER_TIME,
      ADDRESS, INTERVIEWER,
      CHECK_RANK_LEVEL_CODE,
      COMPUTER_EXAME_TIME,
      APPINT_ENTRANCE_TIME,
    };
    const calendarResult = await ctx.service.calendarService.add(addParams);
    ctx.body = ReturnJson.success(calendarResult);
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ID, ORGANIZATION_CODE } = params;
    const deleteParams = {
      ID,
      ORGANIZATION_CODE,
    };
    const calendarResult = await ctx.service.calendarService.delete(deleteParams);
    ctx.body = ReturnJson.success(calendarResult);
  }

  // calenderSearchHander
  calenderQueryHander(STATUS_FIELD_NAME, QUERY_FIELD, ORGANIZATION_CODE, RANGE_DATE, STATE, QUERY) {
    const STATES = [ '0', '1', '2' ].indexOf(STATE) !== -1 ? [ STATE ] : [ 0, 1, 2 ];
    const queryParams = {
      ORGANIZATION_CODE,
      [STATUS_FIELD_NAME]: {
        $in: STATES,
      },
      [QUERY_FIELD]: {
        $like: `%${QUERY ? QUERY : ''}%`,
      },
    };
    if (!!RANGE_DATE && RANGE_DATE.length === 2 && !!RANGE_DATE[0] && !!RANGE_DATE[1]) {
      Object.assign(queryParams, {
        DATE_CREATED: {
          $between: RANGE_DATE,
        },
      });
    }
    return queryParams;
  }
}
module.exports = CalendarController;
