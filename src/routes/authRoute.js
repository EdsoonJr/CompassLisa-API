const authController = require('../app/controller/authController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', authController.authenticateUser);
  server.use(prefix, routes);
};