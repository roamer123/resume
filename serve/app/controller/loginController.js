'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async logout() {
    const { ctx } = this;
    const logoutInfo = ctx.logout();
    console.log('logoutInfo.......' + logoutInfo);
  }
}
module.exports = LoginController;
