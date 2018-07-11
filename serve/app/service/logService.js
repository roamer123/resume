'use strict';
const Service = require('egg').Service;

class LogService extends Service {
  async query(params) {
    // const resumeInfo = await this.app.mysql.select('resume_info', {
    //   where: params,
    // });
    const { ctx } = this;
    const queryResult = await ctx.model.Log.queryLog(params);
    const resultJson = {};
    resultJson.resultCode = '000000';
    resultJson.resultMesg = '查询成功';
    resultJson.data = queryResult;
    return resultJson;
  }

  async insert(params) {
    const { ctx } = this;
    const insertResult = await ctx.model.Log.insertLog(params);
    console.log('insert result' + JSON.stringify(insertResult));
    // const resultJson = {};
    // if (insertInfo === 1) {
    //   resultJson.resultCode = '000000';
    //   resultJson.resultMesg = '插入成功';
    //   resultJson.data = 'true';
    // } else {
    //   resultJson.resultCode = '999999';
    //   resultJson.resultMesg = '插入失败';
    //   resultJson.data = 'falae';
    // }
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
    const updateResult = await ctx.model.Log.update(params, options);
    console.log('update updateResult; ' + updateResult);
    const resultJson = {};
    if (updateResult == 1) {
      resultJson.resultCode = '000000';
      resultJson.resultMesg = '更新成功';
      resultJson.data = 'true';
    } else {
      resultJson.resultCode = '999999';
      resultJson.resultMesg = '更新失败';
      resultJson.data = 'falae';
    }
    return resultJson;
  }

  async delete(params) {
    const { ctx } = this;
    const deleteResult = await ctx.model.Log.deleteLog(params);
    const resultJson = {};
    if (deleteResult == 1) {
      resultJson.resultCode = '000000';
      resultJson.resultMesg = '删除成功';
      resultJson.data = 'true';
    } else {
      resultJson.resultCode = '999999';
      resultJson.resultMesg = '删除失败';
      resultJson.data = 'falae';
    }
    return resultJson;
  }
}
module.exports = LogService;
