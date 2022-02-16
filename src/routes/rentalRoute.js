const rentalController = require('../app/controller/rentalController');
const validateInsertRental = require('../app/validation/rental/insertRental');
const validateIdRental = require('../app/validation/id/id');
const validatePutRental = require('../app/validation/rental/putRental');
const validateGetRental = require('../app/validation/rental/putRental');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', validateInsertRental, rentalController.insertRental);
  routes.get('/', validateGetRental, rentalController.getAllRentals);
  routes.get('/:id', validateIdRental, rentalController.findOneRental);
  routes.put('/:id', validateIdRental, validatePutRental, rentalController.updateRental);
  routes.delete('/:id', validateIdRental, rentalController.deleteRental);
  server.use(prefix, routes);
  
};