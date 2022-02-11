const rentalService = require('../service/rentalService');

class RentalController{
    
  async insertRental(req, res){
    try {
      const newRental = await rentalService.create(req.body);
      return res.status(201).json({"Locadora":newRental});
    } catch (error) {
      return res.status(400).json({
        'message': 'bad request',
        'details': [{ 'message': error.message }]
      });
    }
  }
}

module.exports = new RentalController;