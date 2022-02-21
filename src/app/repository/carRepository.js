const carSchema = require('../schema/carSchema');

class CarRepository {
  async create(payload) {
    return carSchema.create(payload);
  }

  async find(payload) {
    return carSchema.paginate(payload);
  }

  async findOne(payload) {
    return carSchema.findOne(payload);
  }

  async delete(payload) {
    return carSchema.deleteOne(payload);
  }

  async update(id, payload) {
    await carSchema.updateOne({ _id: id }, payload);
    return carSchema.findOne({ _id: id });
  }

  async patch(id, acessorioId, payload) {
    return carSchema.findByIdAndUpdate(
      id,
      { $set: { 'acessorios.$[test].descricao': payload.descricao } },
      { arrayFilters: [{ 'test._id': acessorioId }] }
    );
  }
}
module.exports = new CarRepository();
