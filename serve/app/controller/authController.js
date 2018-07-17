'use strict';
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class authController extends Controller {
  async login() {
    // const { ctx } = this;
    // console.dir(arguments);
    return ReturnJson.success('result');
  }
}

module.exports = authController;
