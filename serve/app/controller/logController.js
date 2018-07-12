'use strict';
const Controller = require('egg').Controller;

class LogController extends Controller {
  async query() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('enter into server....');
    console.log(params);
    const logResult = await ctx.service.logService.query(params);

    const resultJson = {};
    resultJson.resultCode = '000000';
    resultJson.resultMesg = '查询成功';
    resultJson.data = logResult;
    ctx.body = resultJson;
  }

  async insert() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const logResult = await ctx.service.logService.insert(params);
    console.log('insert result ' + JSON.stringify(logResult));
    ctx.body = logResult;
  }

  async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const logResult = await ctx.service.logService.update(params);
    console.log('update Result; ' + JSON.stringify(logResult));
    console.log(typeof (logResult));

    const resultJson = {};
    // logResult是个数组。[0]表示更新个数为0
    if (logResult !== [ 0 ]) {
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
    const logResult = await ctx.service.logService.delete(params);

    const resultJson = {};
    if (logResult === 1) {
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
module.exports = LogController;

