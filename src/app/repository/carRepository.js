const carSchema = require('../schema/carSchema');

class CarRepository {
  async create(payload){
    return carSchema.create(payload);
  }

  async find(payload) {
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'Veículos',
      totalPages: 'offsets',
      page: 'offset',
      nextPage: false,
      prevPage: false,
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false
    };
    const options = {
      page: 1,
      limit: 5,
      customLabels: myCustomLabels
    };
    return carSchema.paginate(payload, options, {});
  }

  async findOne(payload){
    return carSchema.findOne(payload);
  }

  async delete(payload){
    return carSchema.deleteOne(payload);
  }

  async update(id, payload){
    await carSchema.updateOne({_id:id}, payload);
    return carSchema.findOne({_id:id});

  }

  async patch(id, acessorioId, payload){
    return carSchema.findByIdAndUpdate(
      id, {$set: {'acessorios.$[test].descricao': payload.descricao}},
      {arrayFilters: [{'test._id': acessorioId}]}
    );
  }

}
module.exports = new CarRepository;