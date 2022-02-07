const carController = require('../app/controller/peopleController');
const insertPeopleValidation = require('../app/validation/people/insertPeople');



module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', insertPeopleValidation, carController.insertPeople);
  routes.get('/', carController.getAllPeoples);
  routes.get('/:id', carController.findOnePeople);
  routes.put('/:id', carController.updatePeople);
  routes.delete('/:id', carController.deletePeople);
  server.use(prefix, routes);

};