const rentalService = require('../service/rentalService');
const ErrorsMessages = require('../utils/Errors/ErrorsMessages');

class RentalController{
    
  async insertRental(req, res){
    try {
      const newRental = await rentalService.create(req.body);
      return res.status(201).json({"Locadora":newRental});
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }

  async getAllRentals(req, res){

    try {
      const allRentals = await rentalService.find(req.query);
      return res.status(201).json(allRentals);
      
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);    
    }

  }
}

module.exports = new RentalController;