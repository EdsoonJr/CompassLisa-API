const peopleSchema = require('../schema/peopleSchema.js');

class PeopleRepository{
    async create(payload){
        return peopleSchema.create(payload);
    }
}

module.exports = new PeopleRepository;