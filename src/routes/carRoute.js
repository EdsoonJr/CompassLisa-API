const carController = require('../app/controller/carController');
const validateInsertCar = require('../app/validation/car/insertCar');
const validateIdCar = require('../app/validation/id/id');
const validatePutCar = require('../app/validation/car/putCar');
const validateGetCar = require('../app/validation/car/putCar');
const tokenBearer = require('../app/utils/authenticate/tokenBearer');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', tokenBearer, validateInsertCar, carController.insertCar);
  routes.get('/', tokenBearer, validateGetCar, carController.findCars);
  routes.put('/:id', tokenBearer, validateIdCar, validatePutCar, carController.updateCar);
  routes.delete('/:id', tokenBearer, validateIdCar, carController.deleteCar);
  routes.get('/:id', tokenBearer, validateIdCar, carController.findOneCar);
  routes.patch('/:id/acessorios/:acessorioId', tokenBearer, carController.updateAcessory);
  server.use(prefix, routes);
};
