const authController = require('../app/controller/authController');
const authValidation = require('../app/validation/auth/authValidation');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', authValidation, authController.authenticateUser);
  server.use(prefix, routes);
};