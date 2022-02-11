const rentalRepository = require('../repository/rentalRepository');


class RentalService{

  async create(payload){
    const newRental = await rentalRepository.create(payload);
    return newRental;
  }

  async find(payload){
    const allRentals = await rentalRepository.find(payload);
    return allRentals;
  }
}

module.exports = new RentalService;