'use strict';

const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class CalendarController extends Controller {
  async initInterview() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ORGANIZATION_CODE } = Object.keys(params).length === 0 ? {} : params;
    const queryParams = {
      ORGANIZATION_CODE,
    };
    const calendarResult = await ctx.service.calendarService.initInterview(queryParams);

    ctx.body = ReturnJson.success(calendarResult);
  }

  async initExam() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ORGANIZATION_CODE } = params;
    const queryParams = {
      ORGANIZATION_CODE,
    };
    ctx.logger.info('calender initExam request data: %j', params);
    const calendarResult = await ctx.service.calendarService.initExam(queryParams);
    ctx.logger.info('calender initExam response data: %j', calendarResult);

    ctx.body = ReturnJson.success(calendarResult);
  }

  async initIn() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ORGANIZATION_CODE } = params;
    const queryParams = {
      ORGANIZATION_CODE,
    };
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
}
module.exports = CalendarController;
