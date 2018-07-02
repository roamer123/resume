'use strict';
const Controller = require('egg').Controller;

class ResumeInfoController extends Controller {
  async query() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const resumeInfo = await ctx.service.resumeInfoService.query(params);
    ctx.body = resumeInfo;
  }

  async insert() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const insertResult = await ctx.service.resumeInfoService.insert(params);
    ctx.body = insertResult;
  }

  async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    const updateResult = await ctx.service.resumeInfoService.update(params);
    ctx.body = updateResult;
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('params...');
    console.log(params);
    const deleteResult = await ctx.service.resumeInfoService.delete(params);
    ctx.body = deleteResult;
  }
}
module.exports = ResumeInfoController;

