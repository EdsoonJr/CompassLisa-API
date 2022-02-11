const rentalController = require('../app/controller/rentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', rentalController.insertRental);
  server.use(prefix, routes);
  
};