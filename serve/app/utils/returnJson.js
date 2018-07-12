'use strict';

const errorMsg = {
  '-1': '系统异常请联系系统管理员',
};

class ReturnJson {

  static success(data) {
    return {
      resultCode: '000000',
      resultMsg: '请求成功',
      data,
    };
  }

  static fail() {
    return (/^-\d/.test(arguments[0])) ? {
      resultCode: arguments[0],
      resultMsg: errorMsg[arguments[0 ]],
      data: arguments[1],
    } : {
      resultCode: arguments[0],
      resultMsg: arguments[1],
      data: arguments[2],
    };
  }
}

module.exports = ReturnJson;
