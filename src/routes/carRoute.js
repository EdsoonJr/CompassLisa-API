const carController = require('../app/controller/carController');
const validationInsertCar = require('../app/validation/car/insertCar');
const validationDeleteCar = require('../app/validation/car/deleteCar');



module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', validationInsertCar, carController.insertCar);
  routes.get('/', carController.findCars);
  routes.put('/:id', validationInsertCar, carController.updateCar);
  routes.delete('/:id', validationDeleteCar, carController.deleteCar);
  routes.get('/:id', carController.findOneCar);
  routes.patch('/:id/acessorios/:acessorioId', carController.updateAcessory);
  server.use(prefix, routes);
};