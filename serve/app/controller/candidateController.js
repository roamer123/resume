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
    const dropdownList = await ctx.service.candidateService.count(options);
    ctx.body = ReturnJson.success(dropdownList.map(item => {
      return {
        [item.INTERVIEWER_PROCESS_CODE]: item.count,
      };
    }));
  }

  async search() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ORGANIZATION_CODE, INTERVIEWER_PROCESS_CODE, NEED_ORGANIZATION_CODE, TECHNOLOGY_DIRECTION_CODE } = params;
    if (!ORGANIZATION_CODE) {
      ctx.body = ReturnJson.fail('111111', '入参错误，ORGANIZATION_CODE是必须的', {});
    } else {
      const newParams = { ORGANIZATION_CODE };
      if (INTERVIEWER_PROCESS_CODE) newParams[INTERVIEWER_PROCESS_CODE] = INTERVIEWER_PROCESS_CODE;
      if (NEED_ORGANIZATION_CODE) newParams[NEED_ORGANIZATION_CODE] = NEED_ORGANIZATION_CODE;
      if (TECHNOLOGY_DIRECTION_CODE) newParams[TECHNOLOGY_DIRECTION_CODE] = TECHNOLOGY_DIRECTION_CODE;

      const list = await ctx.service.candidateService.search(newParams);
      ctx.body = ReturnJson.success(list);
    }
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
    const result = await ctx.service.candidateService.delete(params);
    ctx.body = ReturnJson.success({
      code: result ? 'success' : 'fail',
    });
  }
}

module.exports = CandidateController;
