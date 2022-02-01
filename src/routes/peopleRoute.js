const carController = require('../app/controller/peopleController');
const insertPeopleValidation = require('../app/validation/people/insertPeople');


module.exports = (server, routes, prefix = '/api/v1/people') => {
    routes.post('/',insertPeopleValidation,carController.insertPeople);
    routes.get('/',carController.getAllPeoples);
    server.use(prefix, routes);

  };