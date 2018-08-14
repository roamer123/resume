'use strict';

const ReturnJson = require('../utils/returnJson');

async function isAuthenticated(ctx, next) {
  if (!ctx.isAuthenticated()) {
    ctx.body = ReturnJson.fail('0000001', '登录验证失败');
    ctx.code = 200;
  } else {
    await next();
  }

}

module.exports = isAuthenticated;
