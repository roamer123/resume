'use strict';
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class InterviewController extends Controller {
  async query() {
    const { ctx } = this;
    const { ORGANIZATION_CODE } = ctx.request.body;
    const list = await ctx.service.interviewService.queryAll({ ORGANIZATION_CODE });
    ctx.body = ReturnJson.success(list);
  }

  async add() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.interviewService.add(params);
    ctx.body = ReturnJson.success({
      code: result ? 'success' : 'fail',
    });
  }

  async update() {
    const { ctx } = this;
    const { ID, ...params } = ctx.request.body;
    const result = await ctx.service.interviewService.update(params, {
      ID,
    });
    ctx.body = ReturnJson.success({
      code: result ? 'success' : 'fail',
    });
  }

  async cancel() {
    const { ctx } = this;
    const { ID } = ctx.request.body;
    const result = await ctx.service.interviewService.update({
      STATUS: 0,
    }, {
      ID,
    });
    ctx.body = ReturnJson.success({
      code: result ? 'success' : 'fail',
    });
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ID } = params;
    const result = await ctx.service.interviewService.destory({
      ID,
    });
    ctx.body = ReturnJson.success({
      code: result ? 'success' : 'fail',
    });
  }
}

module.exports = InterviewController;
