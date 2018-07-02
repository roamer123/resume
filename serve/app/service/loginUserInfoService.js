'use strict';
const Service = require('egg').Service;
class LoginUserInfoService extends Service {
  async query(params) {
    // const querySql = 'select * from resume_user where user_type = ? and position = ?';
    // const queryParams = {
    //   user_type: params.user_type,
    //   position: params.position,
    // };
    console.log(params);
    const loginUserInfo = await this.app.mysql.select('resume_user', {
      // where: { user_type: params.user_type, position: params.position },
      where: params,
    });
    const resultJson = {};
    resultJson.resultCode = '000000';
    resultJson.resultMesg = '查询成功';
    resultJson.data = loginUserInfo;
    return resultJson;
  }

  async insert(params) {
    console.log(params);
    const result = await this.app.mysql.insert('resume_user', params);
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
        user_id: params.user_id,
      },
    };
    const result = await this.app.mysql.update('resume_user', row, options);
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
    const result = await this.app.mysql.delete('resume_user', {
      user_id: params.user_id,
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
module.exports = LoginUserInfoService;
