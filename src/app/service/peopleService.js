const peopleRepository = require('../repository/peopleRepository');
const uniqueCpf = require('../utils/uniques/uniqueCpf');
const uniqueEmail = require('../utils/uniques/uniqueEmail');

class PeopleService {
  async create(payload){

    await uniqueCpf(payload.cpf);
    await uniqueEmail(payload.email);
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
    await uniqueCpf(payload.cpf);
    await uniqueEmail(payload.email);
    const updatedPeople = await peopleRepository.update(id, payload);
    return updatedPeople;
  }
    
  async delete(payload){
    return peopleRepository.delete(payload);
        
  }
    

}

module.exports = new PeopleService;