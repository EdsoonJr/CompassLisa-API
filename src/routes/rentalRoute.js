const rentalController = require('../app/controller/rentalController');
const validateInsertRental = require('../app/validation/rental/insertRental');
const validateIdRental = require('../app/validation/id/id');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', validateInsertRental, rentalController.insertRental);
  routes.get('/', rentalController.getAllRentals);
  routes.get('/:id', validateIdRental, rentalController.findOneRental);
  routes.put('/:id', validateIdRental, rentalController.updateRental);
  routes.delete('/:id', validateIdRental, rentalController.deleteRental);
  server.use(prefix, routes);
  
};