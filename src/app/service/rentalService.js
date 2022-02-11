const rentalRepository = require('../repository/rentalRepository');


class RentalService{

  async create(payload){
    const newRental = await rentalRepository.create(payload);
    return newRental;
  }
}

module.exports = new RentalService;