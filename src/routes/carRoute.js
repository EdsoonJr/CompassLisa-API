const carController = require('../app/controller/carController.js');
const validationInserCar = require('../app/validation/car/insertCar.js')
module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/',validationInserCar,carController.insertCar);
    routes.get('/',carController.findCars);
    routes.delete('/:id',carController.deleteCar);
    routes.get('/:id',carController.findOneCar);
    server.use(prefix, routes);
  };