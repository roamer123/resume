'use strict';
const Service = require('egg').Service;

class ResumeService extends Service {
  async query(params) {
    const { ctx } = this;
    const queryResult = await ctx.model.Resume.queryResume(params);
    return queryResult;
  }

  async insert(params) {
    const { ctx } = this;
    const insertResult = await ctx.model.Resume.insertResume(params);
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
    const updateResult = await ctx.model.Resume.updateResume(params, options);
    return updateResult;
  }

  async delete(params) {
    const { ctx } = this;
    const deleteResult = await ctx.model.Resume.deleteResume(params);
    return deleteResult;
  }
}
module.exports = ResumeService;
