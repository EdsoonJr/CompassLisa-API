const PeopleRepository = require('../repository/PeopleRepository');
const uniqueCpf = require('../utils/uniques/uniqueCpf');
const uniqueEmail = require('../utils/uniques/uniqueEmail');

class PeopleService {
  async create(payload) {
    await uniqueCpf(payload.cpf);
    await uniqueEmail(payload.email);
    const newPeople = await PeopleRepository.create(payload);
    return newPeople;
  }

  async find(payload) {
    const allPeoples = await PeopleRepository.find(payload);
    return allPeoples;
  }

  async findOne(payload) {
    const onePeople = await PeopleRepository.findOne(payload);
    return onePeople;
  }

  async update(id, payload) {
    await uniqueCpf(payload.cpf);
    await uniqueEmail(payload.email);
    const updatedPeople = await PeopleRepository.update(id, payload);
    return updatedPeople;
  }

  async delete(payload) {
    return PeopleRepository.delete(payload);
  }
}

module.exports = new PeopleService();
