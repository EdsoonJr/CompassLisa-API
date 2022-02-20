const AuthController = require('../app/controller/AuthController');
const authValidation = require('../app/validation/auth/authValidation');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', authValidation, AuthController.authenticateUser);
  server.use(prefix, routes);
};
