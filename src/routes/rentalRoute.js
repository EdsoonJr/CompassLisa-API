const rentalController = require('../app/controller/rentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', rentalController.insertRental);
  routes.get('/', rentalController.getAllRentals);
  routes.get('/:id', rentalController.findOneRental);
  routes.put('/:id', rentalController.updateRental);
  server.use(prefix, routes);
  
};