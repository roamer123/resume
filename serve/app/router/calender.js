'use strict';

module.exports = app => {
  const { isAuthenticated } = app.middleware;
  const { router, controller } = app;

  // 日程安排
  router.all('/calendar/process_init_interview', isAuthenticated, controller.calendarController.initInterview);
  router.all('/calendar/process_init_exam', isAuthenticated, controller.calendarController.initExam);
  router.all('/calendar/process_init_in', isAuthenticated, controller.calendarController.initIn);
  router.all('/calendar/add', isAuthenticated, controller.calendarController.add);
  router.all('/calendar/delete', isAuthenticated, controller.calendarController.delete);

};
