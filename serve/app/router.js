'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { authenticate, isAuthenticated } = app.middleware;
  const { router, controller } = app;
  router.get('/passport', controller.home.login);
  // 登录校验
  router.all('/login', authenticate, app.passport.authenticate('local', { failureRedirect: '/login', successReturnToOrRedirect: '/passport' }));

  // 退出登录
  router.all('/logout', isAuthenticated, controller.loginController.logout);

  // dropdown
  router.get('/dropdown', isAuthenticated, controller.dropdownController.query);

  // upload
  router.post('/upload', isAuthenticated, controller.uploader.upload);

  // candidate
  router.post('/candidate/process_count', isAuthenticated, controller.candidateController.count);
  router.post('/candidate/search', isAuthenticated, controller.candidateController.search);
  router.post('/candidate/process_change', isAuthenticated, controller.candidateController.change);
  router.post('/candidate/add', isAuthenticated, controller.candidateController.add);
  router.post('/candidate/add_remark', isAuthenticated, controller.candidateController.addRemark);
  router.post('/candidate/delete', isAuthenticated, controller.candidateController.delete);

  // log表相关操作
  router.all('/log/query', controller.logController.query);
  router.all('/log/insert', controller.logController.insert);
  router.all('/log/update', controller.logController.update);
  router.all('/log/delete', controller.logController.delete);

  // position表相关操作
  router.all('/position/search', isAuthenticated, controller.positionController.query);
  router.all('/position/add', isAuthenticated, controller.positionController.insert);
  router.all('/position/update', isAuthenticated, controller.positionController.update);
  router.all('/position/delete', isAuthenticated, controller.positionController.delete);
  router.all('/position/query_list', isAuthenticated, controller.positionController.queryList);
  router.all('/position/process_count', isAuthenticated, controller.positionController.count);


  // resume表相关操作
  router.all('/resume/query', isAuthenticated, controller.resumeController.query);
  router.all('/resume/insert', isAuthenticated, controller.resumeController.insert);
  router.all('/resume/update', isAuthenticated, controller.resumeController.update);
  router.all('/resume/delete', isAuthenticated, controller.resumeController.delete);

  // 日程安排
  router.all('/calendar/process_init_interview', isAuthenticated, controller.calendarController.initInterview);
  router.all('/calendar/process_init_exam', isAuthenticated, controller.calendarController.initExam);
  router.all('/calendar/process_init_in', isAuthenticated, controller.calendarController.initIn);
  router.all('/calendar/add', isAuthenticated, controller.calendarController.add);
  router.all('/calendar/delete', isAuthenticated, controller.calendarController.delete);


  // 批量生成数据
  router.all('/generatedata/candidate', controller.generateData.insertCandidate);
  router.all('/generatedata/position', controller.generateData.insertPosition);
};
