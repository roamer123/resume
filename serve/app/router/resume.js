'use strict';

module.exports = app => {
  const { isAuthenticated } = app.middleware;
  const { router, controller } = app;
  // resume表相关操作
  router.all('/resume/query', isAuthenticated, controller.resumeController.query);
  router.all('/resume/insert', isAuthenticated, controller.resumeController.insert);
  router.all('/resume/update', isAuthenticated, controller.resumeController.update);
  router.all('/resume/delete', isAuthenticated, controller.resumeController.delete);
};
