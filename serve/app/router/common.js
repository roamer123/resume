'use strict';

module.exports = app => {
  const { isAuthenticated } = app.middleware;
  const { router, controller } = app;
  // dropdown
  router.get('/dropdown', isAuthenticated, controller.dropdownController.query);
  // 批量生成数据
  router.all('/generatedata/candidate', controller.generateData.insertCandidate);
  router.all('/generatedata/position', controller.generateData.insertPosition);

};
