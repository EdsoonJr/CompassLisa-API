const rentalSchema = require('../schema/rentalSchema');

class RentalRepository {
  async create(payload, data) {
    return rentalSchema.create(payload, data);
  }

  async find(payload) {
    return rentalSchema.paginate(payload);
  }

  async findOne(payload) {
    return rentalSchema.findOne(payload);
  }

  async update(id, payload) {
    await rentalSchema.updateOne({ _id: id }, payload);
    return rentalSchema.findOne({ _id: id });
  }

  async delete(payload) {
    return rentalSchema.deleteOne(payload);
  }
}

module.exports = new RentalRepository();
