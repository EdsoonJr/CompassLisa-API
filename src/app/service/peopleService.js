
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

  async update(id, payload){
    const updatedPeople = await peopleRepository.update(id, payload);
    return updatedPeople;
  }
    
  async delete(payload){
    return peopleRepository.delete(payload);
        
  }
    

}

module.exports = new PeopleService;