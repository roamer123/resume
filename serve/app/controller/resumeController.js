'use strict';
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');
class ResumeController extends Controller {
  async query() {
    const { ctx } = this;
    const params = ctx.request.body;
    const resumeResult = await ctx.service.resumeService.query(params);

    ctx.body = ReturnJson.success(resumeResult);
  }

  async insert() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const resumeResult = await ctx.service.resumeService.insert(params);
    ctx.body = ReturnJson.success({
      code: resumeResult ? 'success' : 'fail',
    });
  }

  async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log(params);
    const resumeResult = await ctx.service.resumeService.update(params);

    ctx.body = ReturnJson.success({
      code: resumeResult !== [ 0 ] ? 'success' : 'fail',
    });
  
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('enter into server....');
    console.log(params);
    const resumeResult = await ctx.service.resumeService.delete(params);

    ctx.body = ReturnJson.success({
      code: resumeResult === 1 ? 'success' : 'fail',
    });
  }
}
module.exports = ResumeController;

