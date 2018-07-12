'use strict';
const Service = require('egg').Service;

class LogService extends Service {
  async query(params) {
    const { ctx } = this;
    const queryResult = await ctx.model.Log.queryLog(params);
    return queryResult;
  }

  async insert(params) {
    const { ctx } = this;
    const insertResult = await ctx.model.Log.insertLog(params);
    return insertResult;
  }

  async update(params) {
    const { ctx } = this;
    // 需要在此处加where
    const options = {
      where: {
        OPERATION_CODE: params.OPERATION_CODE,
      },
    };
    const updateResult = await ctx.model.Log.updateLog(params, options);
    return updateResult;
  }

  async delete(params) {
    const { ctx } = this;
    const deleteResult = await ctx.model.Log.deleteLog(params);
    return deleteResult;
  }
}
module.exports = LogService;
