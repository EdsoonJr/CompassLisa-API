const rentalSchema = require('../schema/rentalSchema');

class RentalRepository{

  async create(payload){
    return  rentalSchema.create(payload);
  }

  async find(payload){
    const myCustomLabels = {
      totalDocs: 'total',
      docs: 'Locadoras',
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
    return rentalSchema.paginate(payload, options, {});
  }

  async findOne(payload){
    return  rentalSchema.findOne(payload);
  }

  async update(id, payload){
    await rentalSchema.updateOne({_id:id}, payload);
    return rentalSchema.findOne({_id:id});

  }

  async delete(payload){
    return rentalSchema.deleteOne(payload);
  }

}

module.exports = new RentalRepository;