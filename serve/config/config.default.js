'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527500059747_5692';

  // add your config here
  config.middleware = [];

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'admin123',
      // 数据库名
      database: 'RESUMEDATA',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    methodnoallow: {
      enable: false,
    },
    domainWhiteList: [ 'http://127.0.0.1:8080' ],
  };

  config.cors = {
    allowMethod: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // oauth2Serve开启password和client_credentials模式
  config.oAuth2Server = {
    debug: config.env === 'local',
    grants: [ 'password' ],
  };

  return config;
};
