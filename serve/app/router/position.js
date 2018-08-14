'use strict';

module.exports = app => {
  const { isAuthenticated } = app.middleware;
  const { router, controller } = app;
  // position表相关操作
  router.all('/position/search', isAuthenticated, controller.positionController.query);
  router.all('/position/add', isAuthenticated, controller.positionController.insert);
  router.all('/position/update', isAuthenticated, controller.positionController.update);
  router.all('/position/delete', isAuthenticated, controller.positionController.delete);
  router.all('/position/query_list', isAuthenticated, controller.positionController.queryList);
  router.all('/position/process_count', isAuthenticated, controller.positionController.count);

};
