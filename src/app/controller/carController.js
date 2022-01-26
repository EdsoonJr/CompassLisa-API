const carService = require('../service/carService');


class CarController{
    async findCars(req,res){
        try {
            const allCars = await carService.find();
            return res.status(201).json(allCars)
        } catch (error) {
            res.status(201).json(error)
        }
    }
}

module.exports = new CarController;

