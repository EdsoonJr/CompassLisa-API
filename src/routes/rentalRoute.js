const RentalController = require('../app/controller/RentalController');
const validateInsertRental = require('../app/validation/rental/insertRental');
const validateIdRental = require('../app/validation/id/id');
const validatePutRental = require('../app/validation/rental/putRental');
const validateGetRental = require('../app/validation/rental/putRental');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', validateInsertRental, RentalController.insertRental);
  routes.get('/', validateGetRental, RentalController.getAllRentals);
  routes.get('/:id', validateIdRental, RentalController.findOneRental);
  routes.put('/:id', validateIdRental, validatePutRental, RentalController.updateRental);
  routes.delete('/:id', validateIdRental, RentalController.deleteRental);
  server.use(prefix, routes);
};
