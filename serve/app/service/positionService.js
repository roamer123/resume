'use strict';
const Service = require('egg').Service;

class PositionService extends Service {
  async query(params) {
    const { ctx } = this;
    const queryResult = await ctx.model.Position.queryPosition(params);
    return queryResult;
  }

  async queryPositionList(params) {
    const { ctx } = this;
    const queryResult = await ctx.model.Position.queryPositionList(params);
    return queryResult;
  }

  async count(options = {}) {
    const countList = await this.ctx.model.Position.countPosition(options);
    return countList;
  }

  async insert(params) {
    const { ctx } = this;
    const insertResult = await ctx.model.Position.insertPosition(params);
    return insertResult;
  }

  async update(params) {
    const { ctx } = this;
    // 需要在此处加where
    const options = {
      where: {
        ID: params.ID,
      },
    };
    const updateResult = await ctx.model.Position.updatePosition(params, options);
    return updateResult;
  }

  async delete(params) {
    const { ctx } = this;
    const deleteResult = await ctx.model.Position.deletePosition(params);
    return deleteResult;
  }
}
module.exports = PositionService;
