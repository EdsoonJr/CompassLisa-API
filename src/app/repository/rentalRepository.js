const rentalSchema = require('../schema/rentalSchema');

class RentalRepository{

  async create(payload){
    return  rentalSchema.create(payload);
  }

}

module.exports = new RentalRepository;