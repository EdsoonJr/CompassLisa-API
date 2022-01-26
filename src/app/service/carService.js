const carRepository = require('../repository/carRepository.js')
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
      const deletedCar = await carRepository.deleteOne(payload)
      return deletedCar
    }
}

module.exports = new CarService;