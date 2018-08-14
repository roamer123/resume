'use strict';

module.exports = app => {
  const { authenticate, isAuthenticated } = app.middleware;
  const { router, controller } = app;

  router.all('/', controller.home.index);
  // 登录redirect
  router.get('/passport', controller.home.login);
  // 登录校验
  router.all('/login', authenticate, app.passport.authenticate('local', { failureRedirect: '/login', successReturnToOrRedirect: '/passport' }));
  // 退出登录
  router.all('/logout', isAuthenticated, controller.loginController.logout);

};
