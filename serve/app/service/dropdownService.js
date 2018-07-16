'use strict';
const Service = require('egg').Service;

class DropdownService extends Service {

  /*
   * 下拉框列表查询
   * @param { type:'' } params
   */
  async query(params) {
    const dropdownList = this.ctx.model.Dictionary.query(params);
    return dropdownList;
  }
}

module.exports = DropdownService;
