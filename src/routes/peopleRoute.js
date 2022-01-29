const carController = require('../app/controller/peopleController.js');
const insertPeopleValidation = require('../app/validation/people/insertPeople.js')

module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.post('/',insertPeopleValidation,carController.insertPeople);
    server.use(prefix, routes);

  };