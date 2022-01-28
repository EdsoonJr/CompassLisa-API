const PeopleRepository = require('../repository/peopleRepository');

class PeopleService {
    async create(payload){
        const newPeople = await PeopleRepository.create(payload);
        return newPeople;
    }
}

module.exports = new PeopleService;