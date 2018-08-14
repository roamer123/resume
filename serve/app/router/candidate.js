'use strict';

module.exports = app => {
  const { isAuthenticated } = app.middleware;
  const { router, controller } = app;

  // candidate
  router.post('/candidate/process_count', isAuthenticated, controller.candidateController.count);
  router.post('/candidate/search', isAuthenticated, controller.candidateController.search);
  router.post('/candidate/process_change', isAuthenticated, controller.candidateController.change);
  router.post('/candidate/add', isAuthenticated, controller.candidateController.add);
  router.post('/candidate/add_remark', isAuthenticated, controller.candidateController.addRemark);
  router.post('/candidate/delete', isAuthenticated, controller.candidateController.delete);

};
