const carController = require('../app/controller/peopleController.js');

module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.post('/',carController.insertPeople);
    server.use(prefix, routes);

  };