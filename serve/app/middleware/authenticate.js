'use strict';

const ReturnJson = require('../utils/returnJson');

async function authenticate(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.body = ReturnJson.success({
      CODE: 'fail',
      MESG: err.toString(),
    });
  }


}

module.exports = authenticate;
