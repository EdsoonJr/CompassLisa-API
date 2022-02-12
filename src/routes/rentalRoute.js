const rentalController = require('../app/controller/rentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', rentalController.insertRental);
  routes.get('/', rentalController.getAllRentals);
  routes.get('/:id', rentalController.findOneRental);
  server.use(prefix, routes);
  
};