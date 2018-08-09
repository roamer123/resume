'use strict';

module.exports = app => {
  const { isAuthenticated } = app.middleware;
  const { router, controller } = app;
  // interview
  router.post('/interview/query', isAuthenticated, controller.interviewController.query);
  router.post('/interview/update', isAuthenticated, controller.interviewController.update);
  router.post('/interview/add', isAuthenticated, controller.interviewController.add);
  router.post('/interview/cancel', isAuthenticated, controller.interviewController.cancel);

};
