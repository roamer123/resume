'use strict';

const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class HomeController extends Controller {
  async login() {
    const { ctx } = this;
    const user = ctx.user;
    console.log('user', user);
    if (!ctx.isAuthenticated()) {
      ctx.body = ReturnJson.fail('0000001', '登录验证失败');
      ctx.code = 200;
    } else {
      ctx.body = ReturnJson.success({
        CODE: 'success',
        ORGANIZATION_CODE: user.ORGANIZATION_CODE,
      });
    }
  }
}

module.exports = HomeController;
