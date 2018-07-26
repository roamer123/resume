'use strict';
const Service = require('egg').Service;

class LoginService extends Service {

  async login(username, password) {
    const user = await this.ctx.model.User.getUser(username, password);
    return user;
  }
}

module.exports = LoginService;
