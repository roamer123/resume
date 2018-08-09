'use strict';

module.exports = app => {
  const { isAuthenticated } = app.middleware;
  const { router, controller } = app;

  // upload
  // router.post('/upload', isAuthenticated, controller.uploader.upload);
  router.post('/candidate/upload', controller.uploader.sigleUpload);

  router.all('/candidate/download', isAuthenticated, controller.uploader.download);

};
