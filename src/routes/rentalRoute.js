const rentalController = require('../app/controller/rentalController');
const insertRentalVali = require('../app/validation/rental/insertRental');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', insertRentalVali, rentalController.insertRental);
  routes.get('/', rentalController.getAllRentals);
  routes.get('/:id', rentalController.findOneRental);
  routes.put('/:id', rentalController.updateRental);
  routes.delete('/:id', rentalController.deleteRental);
  server.use(prefix, routes);
  
};