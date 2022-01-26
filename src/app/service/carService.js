const carRepository = require('../repository/carRepository.js')
class CarService{
    async find(payload){
      const allCars = await carRepository.find(payload);
      return allCars;
    }
}

module.exports = new CarService;