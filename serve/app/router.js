'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // dropdown
  router.get('/dropdown', controller.dropdownController.query);

  // candidate
  router.post('/candidate/process_count', controller.candidateController.count);
  router.post('/candidate/search', controller.candidateController.search);
  router.post('/candidate/process_change', controller.candidateController.change);
  router.post('/candidate/add', controller.candidateController.add);
  router.post('/candidate/add_remark', controller.candidateController.addRemark);
  router.post('/candidate/delete', controller.candidateController.delete);
  router.all('/login', app.oAuth2Server.token());
  // router.all('/logout', app.oAuth2Server.token());

  // log表相关操作
  router.all('/log/query', controller.logController.query);
  router.all('/log/insert', controller.logController.insert);
  router.all('/log/update', controller.logController.update);
  router.all('/log/delete', controller.logController.delete);

  // position表相关操作
  router.all('/position/search', controller.positionController.query);
  router.all('/position/add', controller.positionController.insert);
  router.all('/position/update', controller.positionController.update);
  router.all('/position/delete', controller.positionController.delete);
  router.all('/position/query_list', controller.positionController.queryList);


  // resume表相关操作
  router.all('/resume/query', controller.resumeController.query);
  router.all('/resume/insert', controller.resumeController.insert);
  router.all('/resume/update', controller.resumeController.update);
  router.all('/resume/delete', controller.resumeController.delete);

  // 批量生成数据
  router.all('/generatedata/candidate', controller.generateData.insertCandidate);
  router.all('/generatedata/position', controller.generateData.insertPosition);
};
