const carController = require('../app/controller/carController.js');

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/',carController.insertCar);
    routes.get('/',carController.findCars);
    server.use(prefix, routes);
  };