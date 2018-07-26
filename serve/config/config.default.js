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
    domainWhiteList: [ 'http://172.31.7.167:8080', 'http://172.0.0.1:8080' ],
  };

  config.cors = {
    origin: '*',
    allowMethod: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // config.session = {
  //   renew: true,
  // };

  config.multipart = {
    fileSize: '5mb',
    whitelist: [
      '.jpeg',
      '.jpg',
      '.png',
      '.xlsx',
      '.pdf',
      '.docx',
    ],
  };

  config.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天 设置过期时间
    httpOnly: true,
    encrypt: true,
  };

  config.onerror = {
    all(err, ctx) {
      // 在此定义针对所有响应类型的错误处理方法
      // 注意，定义了config.all之后，其他错误处理方法不会再生效
      ctx.body = 'error all';
      ctx.status = 500;
    },
    // html(err, ctx) {
    //   // html hander
    //   ctx.body = '<h2>error html</h2>';
    //   ctx.status = 500;
    // },
    // json(err, ctx) {
    //   // json hander
    //   ctx.body = { message: 'error json' };
    //   ctx.status = 500;
    // },
    // notfound: {
    //   pageUrl: '/404.html',
    // },

    logger: {
      appLogName: `${appInfo.name}-web.log`, // 应用相关日志
      coreLogName: 'egg-web.log', // 框架内核、插件日志
      agentLogName: 'egg-agent.log', // agent 进程日志
      errorLogName: 'common-error.log', // 任何 logger 的 .error() 调用输出的日志都会重定向到这里，重点通过查看此日志定位异常。
    },
  };

  return config;
};
