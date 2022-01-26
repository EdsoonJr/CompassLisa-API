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
}

module.exports = new CarService;