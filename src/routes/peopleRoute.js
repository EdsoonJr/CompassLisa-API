const PeopleController = require('../app/controller/PeopleController');
const validateInsertPeople = require('../app/validation/people/insertPeople');
const validateIdPeople = require('../app/validation/id/id');
const validatePutPeople = require('../app/validation/people/putPeople');
const validateGetPeople = require('../app/validation/people/putPeople');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', validateInsertPeople, PeopleController.insertPeople);
  routes.get('/', validateGetPeople, PeopleController.getAllPeoples);
  routes.get('/:id', validateIdPeople, PeopleController.findOnePeople);
  routes.put('/:id', validatePutPeople, validateIdPeople, PeopleController.updatePeople);
  routes.delete('/:id', validateIdPeople, PeopleController.deletePeople);
  server.use(prefix, routes);
};
