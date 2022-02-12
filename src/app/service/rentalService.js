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

  async findOne(payload){
    const oneRental = await rentalRepository.findOne(payload);
    return oneRental;
  }

  async update(id, payload){
    const updatedPeople = await rentalRepository.update(id, payload);
    return updatedPeople;
  }
}

module.exports = new RentalService;