'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 简历相关操作
  // router.all('/resumeInfo/query', app.oAuth2Server.authenticate(), 'resumeInfo.query');
  // router.post('/resumeInfo/insert', controller.resumeInfo.insert);
  // router.post('/resumeInfo/update', controller.resumeInfo.update);
  // router.post('/resumeInfo/delete', controller.resumeInfo.delete);

  // dropdown
  router.get('/dropdown', controller.dropdownController.query);

  // candidate
  router.post('/candidate/process_count', controller.candidateController.count);
  router.post('/candidate/search', controller.candidateController.search);
  router.post('/candidate/process_change', controller.candidateController.change);
  router.post('/candidate/add', controller.candidateController.add);
  router.post('/candidate/add_remark', controller.candidateController.addRemark);
  router.post('/candidate/delete', controller.candidateController.delete);

  router.all('/oauth2/access_token', app.oAuth2Server.token());
};
