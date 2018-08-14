'use strict';
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class PositionController extends Controller {
  async query() {
    const { ctx } = this;
    const params = ctx.request.body;
    const positionResult = await ctx.service.positionService.query(params);
    ctx.body = ReturnJson.success(positionResult);
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
    ctx.body = ReturnJson.success(positionResult);
  }

  async count() {
    const { ctx } = this;
    const params = ctx.request.body;
    const options = Object.keys(params).length === 0 ? {
      group: 'POSITION_PROCESS_CODE',
      attributes: [ 'POSITION_PROCESS_CODE' ],
    } : {
      group: 'POSITION_PROCESS_CODE',
      attributes: [ 'POSITION_PROCESS_CODE' ],
      where: params,
    };
    const countList = await ctx.service.positionService.count(options);
    const data = {
      PRERECRUITING: countList[0].count,
      RECRUITING: countList[1].count,
      STOPRECRUIT: countList[2].count,
    };
    ctx.body = ReturnJson.success(data);
  }

  async insert() {
    const { ctx } = this;
    const params = ctx.request.body;
    const positionResult = await ctx.service.positionService.insert(params);
    ctx.body = ReturnJson.success({
      code: positionResult ? 'success' : 'fail',
    });
  }

  async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    const positionResult = await ctx.service.positionService.update(params);

    // logResult是个数组。[0]表示更新个数为0
    ctx.body = ReturnJson.success({
      code: positionResult !== [ 0 ] ? 'success' : 'fail',
    });
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    const { ID } = params;
    const deleteParams = {
      ID,
    };
    const positionResult = await ctx.service.positionService.delete(deleteParams);

    ctx.body = ReturnJson.success({
      code: positionResult === 1 ? 'success' : 'fail',
    });
  }
}
module.exports = PositionController;

