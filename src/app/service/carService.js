
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

  async delete(payload){
    return  carRepository.delete(payload);
      
  }

  async update(id, payload){
    const updatedCar = await carRepository.update(id, payload);
    return updatedCar;
  }

  async patch(id, acessorioId, payload){
    const updatedAcessory = await carRepository.patch(id, acessorioId, payload);
    return updatedAcessory;
  }
}

module.exports = new CarService;