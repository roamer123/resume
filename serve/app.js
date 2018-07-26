'use strict';
const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  // 挂载 strategy
  app.passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, async (req, username, password, done) => {
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    // debug('%s %s get user: %j', req.method, req.url, user);
    await app.passport.doVerify(req, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    console.log(user);
    const { username, password } = user;
    const newUser = await app.model.User.getUser(username, password);
    if (!newUser) throw new Error('用户名密码错误');
    ctx.login(user);
    return newUser;
  });

  app.passport.serializeUser(async (ctx, user) => {
    ctx.session.user = {
      username: user.USERNAME,
      organization_code: user.ORGANIZATION_CODE,
    };
    return user;
  });

  app.passport.deserializeUser(async (ctx, user) => {
    ctx.body = {
      resultCode: '000000',
      resultMesg: '请求成功',
      data: {
        CODE: 'success',
        ORGANIZATION_CODE: user.ORGANIZATION_CODE,
      },
    };
    return user;
  });

  app.sessionStore = class Store {
    constructor(app) {
      this.app = app;
      this.store = new Map();
    }

    async get(key) {
      return this.store.get(key);
    }

    async set(key, value) {
      return this.store.set(key, value);
    }

    async destroy(key) {
      return this.store.delete(key);
    }
  };
};
