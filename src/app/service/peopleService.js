const peopleRepository = require('../repository/peopleRepository');
const uniqueCpf = require('../utils/uniques/uniqueCpf');

class PeopleService {
  async create(payload){

    await uniqueCpf(payload.cpf);
    const newPeople = await peopleRepository.create(payload);
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