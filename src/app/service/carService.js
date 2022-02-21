const CarRepository = require('../repository/CarRepository');

class CarService {
  async create(payload) {
    const newCar = await CarRepository.create(payload);
    return newCar;
  }

  async find(payload) {
    const allCars = await CarRepository.find(payload);
    return allCars;
  }

  async findOne(payload) {
    const oneCar = await CarRepository.findOne(payload);
    return oneCar;
  }

  async delete(payload) {
    return CarRepository.delete(payload);
  }

  async update(id, payload) {
    const updatedCar = await CarRepository.update(id, payload);
    return updatedCar;
  }

  async patch(id, acessorioId, payload) {
    const updatedAcessory = await CarRepository.patch(id, acessorioId, payload);
    return updatedAcessory;
  }
}

module.exports = new CarService();
