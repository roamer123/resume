'use strict';
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class DropdownController extends Controller {
  /**
   * 下拉框查询
   */
  async query() {
    const { ctx } = this;
    const params = ctx.request.query;
    const DropdownList = await ctx.service.dropdownService.query(params);
    ctx.body = ReturnJson.success(DropdownList);
  }
}

module.exports = DropdownController;
