'use strict';
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class CandidateController extends Controller {
  async count() {
    const { ctx } = this;
    const params = ctx.request.body;
    const options = Object.keys(params).length === 0 ? {
      group: 'INTERVIEWER_PROCESS_CODE',
      attributes: [ 'INTERVIEWER_PROCESS_CODE' ],
    } : {
      group: 'INTERVIEWER_PROCESS_CODE',
      attributes: [ 'INTERVIEWER_PROCESS_CODE' ],
      where: {
        params,
      },
    };
    const DropdownList = await ctx.service.candidateService.count(options);
    ctx.body = ReturnJson.success(DropdownList);
  }

  async search() {
    const { ctx } = this;
    const params = ctx.request.body;
    const list = await ctx.service.candidateService.search(params);
    ctx.body = ReturnJson.success(list);
  }

  async change() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { CHANGELIST } = params;
    const result = await ctx.service.candidateService.change(CHANGELIST);
    ctx.body = ReturnJson.success(result);
  }

  async add() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('params', params);
    const result = await ctx.service.candidateService.add(params);
    ctx.body = ReturnJson.success({
      code: result ? 'success' : 'fail',
    });
  }

  async addRemark() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { REMARK, ID } = params;
    const attributes = {
      REMARK,
    };
    const options = {
      where: {
        ID,
      },
    };
    const result = await ctx.service.candidateService.update(attributes, options);
    ctx.body = ReturnJson.success({
      code: result ? 'success' : 'fail',
    });
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ID } = params;
    const options = {
      where: {
        ID,
      },
    };
    const result = ID && await ctx.service.candidateService.delete(options);
    ctx.body = ReturnJson.success({
      code: result ? 'success' : 'fail',
    });
  }
}

module.exports = CandidateController;
