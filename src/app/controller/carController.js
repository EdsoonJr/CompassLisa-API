const carService = require('../service/carService');
const ErrorsMessages = require('../utils/Errors/ErrorsMessages');

class CarController{
  async insertCar(req, res){
    try {
      const newCar = await carService.create(req.body);
      return res.status(201).json({"Veículo":newCar});
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }

  async findCars(req, res){
    try { 
      const allCars = await carService.find(req.query);
      return res.status(200).json(allCars);
            
            
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }

  async updateCar(req, res){
    const {id} = req.params;
    const reqCar = req.body;

    try {
      const oneCar = await carService.findOne({_id:id});
      if(!oneCar){
        return ErrorsMessages.notFound(res, 'Vehicle Not Found');
      }

      const  updatedCar = await carService.update(id, reqCar);
      return res.status(200).json(updatedCar);
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }

  async updateAcessory (req, res){
    const { id, acessorioId } = req.params;
    const payload  = req.body;

    try {
      const updatedAcessory = await carService.patch(id, acessorioId, payload);
      return res.status(200).json(updatedAcessory);
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }

  async deleteCar(req, res){
    try {
      const {id} = req.params; 
      const oneCar = await carService.findOne({_id:id});

      if(!oneCar){
        return ErrorsMessages.notFound(res, 'Vehicle Not Found');
      }

      await carService.delete({_id:id});
      return res.status(204).json();

    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);  
    }
  }

  async findOneCar(req, res){
    try {
      const {id} = req.params;
      const oneCar = await carService.findOne({_id:id});
            
      if(!oneCar){
        return ErrorsMessages.notFound(res, 'Vehicle Not Found');
      }
            
      return res.status(200).json({"Veículo":oneCar});
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
            
    }
  }
}

module.exports = new CarController;

