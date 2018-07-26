'use strict';
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class DropdownController extends Controller {
  /**
   * 下拉框查询
   */
  async query() {
    const { ctx } = this;
    const { TYPE } = ctx.request.query;
    const DropdownList = await ctx.service.dropdownService.query({ TYPE });
    ctx.body = ReturnJson.success(DropdownList);
  }
}

module.exports = DropdownController;
