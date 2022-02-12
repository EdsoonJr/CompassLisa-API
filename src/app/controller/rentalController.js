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

  async findOneRental(req, res){
    try {
      const {id} = req.params;
      const oneRental = await rentalService.findOne({_id:id});
            
      if(!oneRental){
        return ErrorsMessages.notFound(res, 'Rental Not Found');
      }
            
      return res.status(200).json({"Pessoa":oneRental});
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);      
    }
  }

  

}

module.exports = new RentalController;