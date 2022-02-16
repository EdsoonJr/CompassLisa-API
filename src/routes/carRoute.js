const carController = require('../app/controller/carController');
const validateInsertCar = require('../app/validation/car/insertCar');
const validateIdCar = require('../app/validation/id/id');
const validatePutCar = require('../app/validation/car/putCar');
const validateGetCar = require('../app/validation/car/putCar');


module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', validateInsertCar, carController.insertCar);
  routes.get('/', validateGetCar, carController.findCars);
  routes.put('/:id', validateIdCar, validatePutCar, carController.updateCar);
  routes.delete('/:id', validateIdCar, carController.deleteCar);
  routes.get('/:id', validateIdCar, carController.findOneCar);
  routes.patch('/:id/acessorios/:acessorioId', carController.updateAcessory);
  server.use(prefix, routes);
};