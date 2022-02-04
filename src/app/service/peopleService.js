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

    async findOne(payload){
        const onePeople = await peopleRepository.findOne(payload);
        return onePeople;
      }

    async updateOne(id,payload){
        const updatedPeople = await peopleRepository.updateOne(id,payload);
        return updatedPeople;
      }
    
      async deleteOne(payload){
        const deletedPeople = await peopleRepository.deleteOne(payload);
        return deletedPeople;
      }
    

}

module.exports = new PeopleService;