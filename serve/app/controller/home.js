'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async login() {
    // const ctx = this.ctx;
    // const { username, password } = ctx.request.body;
    // const user = await this.service.home.login(username, password);
    // ctx.session.user = user;
    // const { id, schemastr } = user || {};
    // console.log(ctx.session);
    // ctx.body = {
    //   data: {
    //     id,
    //     schemastr,
    //     username,
    //   },
    //   message: 'success',
    // };
    console.log('arguments', arguments);
    const { ctx } = this;
    ctx.body = {
      resultCode: '000000',
      resultMesg: '请求成功',
      data: {
        CODE: 'success',
        // ORGANIZATION_CODE: user.ORGANIZATION_CODE,
      },
    };
  }
}

module.exports = HomeController;
