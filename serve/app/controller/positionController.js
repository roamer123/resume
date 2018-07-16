'use strict';
const Controller = require('egg').Controller;

class PositionController extends Controller {
  async query() {
    const { ctx } = this;
    const params = ctx.request.body;
    const positionResult = await ctx.service.positionService.query(params);

    const resultJson = {};
    resultJson.resultCode = '000000';
    resultJson.resultMesg = '查询成功';
    resultJson.data = positionResult;
    ctx.body = positionResult;
  }

  async queryList() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { POSITION_PROCESS_CODE, TECHNOLOGY_DIRECTION_CODE } = params;
    const queryParams = {
      POSITION_PROCESS_CODE,
      TECHNOLOGY_DIRECTION_CODE,
    };
    const positionResult = await ctx.service.positionService.queryPositionList(queryParams);
    const resultJson = {};
    resultJson.resultCode = '000000';
    resultJson.resultMesg = '查询成功';
    resultJson.data = positionResult;
    ctx.body = positionResult;
  }

  async insert() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const positionResult = await ctx.service.positionService.insert(params);
    ctx.body = positionResult;
  }

  async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const positionResult = await ctx.service.positionService.update(params);

    const resultJson = {};
    // logResult是个数组。[0]表示更新个数为0
    if (positionResult !== [ 0 ]) {
      resultJson.resultCode = '000000';
      resultJson.resultMesg = '更新成功';
      resultJson.data = 'true';
    } else {
      resultJson.resultCode = '999999';
      resultJson.resultMesg = '更新失败';
      resultJson.data = 'falae';
    }
    ctx.body = resultJson;
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ID } = params;
    const deleteParams = {
      ID,
    };
    const positionResult = await ctx.service.positionService.delete(deleteParams);

    const resultJson = {};
    if (positionResult === 1) {
      resultJson.resultCode = '000000';
      resultJson.resultMesg = '删除成功';
      resultJson.data = 'true';
    } else {
      resultJson.resultCode = '999999';
      resultJson.resultMesg = '删除失败';
      resultJson.data = 'falae';
    }
    ctx.body = resultJson;
  }
}
module.exports = PositionController;

