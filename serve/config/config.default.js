'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527500059747_5692';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    // support: mysql, mariadb, postgres, mssql
    dialect: 'mysql',
    // 数据库名
    database: 'RESUMEDATA',
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    username: 'root',
    // 密码
    password: 'admin123',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    methodnoallow: {
      enable: false,
    },
    domainWhiteList: ['http://172.31.7.167:8080'],
  };

  config.cors = {
    origin: '*',
    allowMethod: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };


  // oauth2Serve开启password和client_credentials模式
  config.oAuth2Server = {
    debug: config.env === 'local',
    grants: [ 'password' ],
  };

  return config;
};
