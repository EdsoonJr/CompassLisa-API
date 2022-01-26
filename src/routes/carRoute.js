const carController = require('../app/controller/carController.js');
const validationInsertCar = require('../app/validation/car/insertCar.js')
const validationDeleteCar = require('../app/validation/car/deleteCar.js')
module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/',validationInsertCar,carController.insertCar);
    routes.get('/',carController.findCars);
    routes.delete('/:id',validationDeleteCar, carController.deleteCar);
    routes.get('/:id',carController.findOneCar);
    server.use(prefix, routes);
  };