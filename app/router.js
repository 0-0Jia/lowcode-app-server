'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/login', controller.user.login);
  router.post('/user/register', controller.user.register);
  router.get('/version/:username', controller.version.getVersions);
  router.post('/version/insert', controller.version.addVersion);
  router.post('/version/delete', controller.version.deleteVersion);
};
