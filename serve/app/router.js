'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // admin登陆管理人员信息
  router.post('/loginUserInfo/query', controller.loginUserInfo.query);
  router.post('/loginUserInfo/insert', controller.loginUserInfo.insert);
  router.post('/loginUserInfo/update', controller.loginUserInfo.update);
  router.post('/loginUserInfo/delete', controller.loginUserInfo.delete);

  // 简历相关操作
  router.post('/resumeInfo/query', controller.resumeInfo.query);
  router.post('/resumeInfo/insert', controller.resumeInfo.insert);
  router.post('/resumeInfo/update', controller.resumeInfo.update);
  router.post('/resumeInfo/delete', controller.resumeInfo.delete);
};
