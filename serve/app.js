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
    // console.log(' username', username, ' password', password, 'done', done);
    await app.passport.doVerify(req, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    const { username, password } = user;
    const newUser = await app.model.User.getUser(username, password);
    if (!newUser) throw new Error('用户名密码错误');
    console.log('in --- newUser:', newUser);
    ctx.login(user);
    return newUser;
  });

  app.passport.serializeUser(async (ctx, user) => {
    ctx.session.user = {
      USERNAME: user.USERNAME,
      ORGANIZATION_CODE: user.ORGANIZATION_CODE,
      ROLE_TYPE: user.ROLE_TYPE,
    };
    return user;
  });

  app.passport.deserializeUser(async (ctx, user) => {
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
