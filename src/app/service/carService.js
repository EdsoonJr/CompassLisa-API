/* eslint-disable class-methods-use-this */
const carRepository = require('../repository/carRepository');

class CarService{
  async create (payload){
    const newCar = await carRepository.create(payload);
    return newCar;
  }

    async find(payload){
      const allCars = await carRepository.find(payload);
      return allCars;
    }

    async findOne(payload){
      const oneCar = await carRepository.findOne(payload);
      return oneCar;
    }

    async deleteOne(payload){
      const deletedCar = await carRepository.deleteOne(payload);
      return deletedCar;
    }

    async updateOne(id,payload){
      const updatedCar = await carRepository.updateOne(id,payload);
      return updatedCar;
    }
}

module.exports = new CarService;