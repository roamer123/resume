'use strict';
const Controller = require('egg').Controller;

class LogController extends Controller {
  async query() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('enter into server....');
    console.log(params);
    const logInfo = await ctx.service.logService.query(params);
    ctx.body = logInfo;
  }

  async insert() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const logResult = await ctx.service.logService.insert(params);
    ctx.body = logResult;
  }

  async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const logResult = await ctx.service.logService.update(params);
    ctx.body = logResult;
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('enter into server....');
    console.log(params);
    const deleteInfo = await ctx.service.logService.delete(params);
    ctx.body = deleteInfo;
  }
}
module.exports = LogController;

