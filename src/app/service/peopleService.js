/* eslint-disable class-methods-use-this */
const peopleRepository = require('../repository/peopleRepository');
const PeopleRepository = require('../repository/peopleRepository');

class PeopleService {
    async create(payload){
        const newPeople = await PeopleRepository.create(payload);
        return newPeople;
    }

    async find(payload){
        const allPeoples = await peopleRepository.find(payload);
        return allPeoples;
    }
}

module.exports = new PeopleService;