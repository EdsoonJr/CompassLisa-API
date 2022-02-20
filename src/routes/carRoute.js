const CarController = require('../app/controller/CarController');
const validateInsertCar = require('../app/validation/car/insertCar');
const validateIdCar = require('../app/validation/id/id');
const validatePutCar = require('../app/validation/car/putCar');
const validateGetCar = require('../app/validation/car/putCar');
const tokenBearer = require('../app/utils/authenticate/tokenBearer');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', tokenBearer, validateInsertCar, CarController.insertCar);
  routes.get('/', tokenBearer, validateGetCar, CarController.findCars);
  routes.put('/:id', tokenBearer, validateIdCar, validatePutCar, CarController.updateCar);
  routes.delete('/:id', tokenBearer, validateIdCar, CarController.deleteCar);
  routes.get('/:id', tokenBearer, validateIdCar, CarController.findOneCar);
  routes.patch('/:id/acessorios/:acessorioId', tokenBearer, CarController.updateAcessory);
  server.use(prefix, routes);
};
