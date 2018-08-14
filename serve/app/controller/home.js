'use strict';

const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');
const path = require('path');
const fs = require('fs');

class HomeController extends Controller {
  async login() {
    const { ctx } = this;
    const user = ctx.user;
    if (!ctx.isAuthenticated()) {
      ctx.body = ReturnJson.fail('0000001', '登录验证失败');
      ctx.code = 200;
    } else {
      ctx.body = ReturnJson.success({
        CODE: 'success',
        ORGANIZATION_CODE: user.ORGANIZATION_CODE,
        ROLE_TYPE: user.ROLE_TYPE,
      });
    }
  }

  async index() {
    const { ctx } = this;
    const file = path.resolve(__dirname, '../public/dbox.html');
    ctx.set('Content-Type', 'text/html');
    ctx.body = await fs.readFileSync(file);
  }
}

module.exports = HomeController;
