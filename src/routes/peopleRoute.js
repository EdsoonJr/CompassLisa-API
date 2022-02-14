const carController = require('../app/controller/peopleController');
const validateInsertPeople = require('../app/validation/people/insertPeople');
const validateIdPeople = require('../app/validation/people/idPeople');
const validatePutPeople = require('../app/validation/people/putPeople');


module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', validateInsertPeople, carController.insertPeople);
  routes.get('/', carController.getAllPeoples);
  routes.get('/:id', validateIdPeople, carController.findOnePeople);
  routes.put('/:id', validatePutPeople, validateIdPeople, carController.updatePeople);
  routes.delete('/:id', validateIdPeople, carController.deletePeople);
  server.use(prefix, routes);

};