'use strict';
const Controller = require('egg').Controller;
class LoginUserInfoController extends Controller {
  async query() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('params...');
    console.log(params);
    const loginUserInfo = await ctx.service.loginUserInfoService.query(params);
    ctx.body = loginUserInfo;
  }

  async insert() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('params...');
    console.log(params);
    const insertResult = await ctx.service.loginUserInfoService.insert(params);
    ctx.body = insertResult;
  }

  async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('params...');
    console.log(params);
    const updateResult = await ctx.service.loginUserInfoService.update(params);
    ctx.body = updateResult;
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('params...');
    console.log(params);
    const deleteResult = await ctx.service.loginUserInfoService.delete(params);
    ctx.body = deleteResult;
  }
}
module.exports = LoginUserInfoController;
