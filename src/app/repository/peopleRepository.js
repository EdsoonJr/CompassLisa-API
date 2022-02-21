const peopleSchema = require('../schema/peopleSchema');

class PeopleRepository {
  async create(payload) {
    return peopleSchema.create(payload);
  }

  async find(payload) {
    return peopleSchema.paginate(payload);
  }

  async findOne(payload) {
    return peopleSchema.findOne(payload);
  }

  async update(id, payload) {
    await peopleSchema.updateOne({ _id: id }, payload);
    return peopleSchema.findOne({ _id: id });
  }

  async delete(payload) {
    return peopleSchema.deleteOne(payload);
  }
}

module.exports = new PeopleRepository();
