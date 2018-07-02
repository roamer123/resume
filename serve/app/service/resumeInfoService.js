'use strict';
const Service = require('egg').Service;

class ResumeInfoService extends Service {
  async query(params) {
    const resumeInfo = await this.app.mysql.select('resume_info', {
      where: params,
    });
    const resultJson = {};
    resultJson.resultCode = '000000';
    resultJson.resultMesg = '查询成功';
    resultJson.data = resumeInfo;
    return resultJson;
  }

  async insert(params) {
    const result = await this.app.mysql.insert('resume_info', params);
    const resultJson = {};
    if (result.affectedRows === 1) {
      resultJson.resultCode = '000000';
      resultJson.resultMesg = '插入成功';
      resultJson.data = 'true';
    } else {
      resultJson.resultCode = '999999';
      resultJson.resultMesg = '插入失败';
      resultJson.data = 'falae';
    }
    console.log(result);
    return resultJson;
  }

  async update(params) {
    const row = params;
    const options = {
      where: {
        resume_id: params.resume_id,
      },
    };
    const result = await this.app.mysql.update('resume_info', row, options);
    const resultJson = {};
    if (result.affectedRows === 1) {
      resultJson.resultCode = '000000';
      resultJson.resultMesg = '更新成功';
      resultJson.data = 'true';
    } else {
      resultJson.resultCode = '999999';
      resultJson.resultMesg = '更新失败';
      resultJson.data = 'falae';
    }
    console.log(result);
    return resultJson;
  }

  async delete(params) {
    const result = await this.app.mysql.delete('resume_info', {
      resume_id: params.resume_id,
    });
    const resultJson = {};
    if (result.affectedRows === 1) {
      resultJson.resultCode = '000000';
      resultJson.resultMesg = '删除成功';
      resultJson.data = 'true';
    } else {
      resultJson.resultCode = '999999';
      resultJson.resultMesg = '删除失败';
      resultJson.data = 'falae';
    }
    console.log(result);
    return resultJson;
  }
}
module.exports = ResumeInfoService;
