'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // admin登陆管理人员信息
  // router.post('/loginUserInfo/query', controller.loginUserInfo.query);
  // router.post('/loginUserInfo/insert', controller.loginUserInfo.insert);
  // router.post('/loginUserInfo/update', controller.loginUserInfo.update);
  // router.post('/loginUserInfo/delete', controller.loginUserInfo.delete);

  // 简历相关操作
  // router.all('/resumeInfo/query', app.oAuth2Server.authenticate(), 'resumeInfo.query');
  // router.post('/resumeInfo/insert', controller.resumeInfo.insert);
  // router.post('/resumeInfo/update', controller.resumeInfo.update);
  // router.post('/resumeInfo/delete', controller.resumeInfo.delete);

  router.all('/oauth2/access_token', app.oAuth2Server.token());

  // 日志相关操作
  router.all('/log/query', controller.log.query);
  router.all('/log/insert', controller.log.insert);
  router.all('/log/update', controller.log.update);
  router.all('/log/delete', controller.log.delete);
};
