const carService = require('../service/carService');


class CarController{
    async insertCar(req,res){
        try {
            const newCar = await carService.create(req.body)
            return res.status(201).json(newCar)
        } catch (error) {
            return res.status(500).json({error})
        }
    }

    async findCars(req,res){
        try {
            const modelo = req.query.modelo
            if(modelo){
                const queryCar = await carService.find({modelo:{$regex:modelo,$options:"i"}});
                return res.status(201).json({"Veículo":queryCar})
            }else{
            const allCars = await carService.find({});
            return res.status(201).json({"Veículos":allCars});
            }
            
        } catch (error) {
            res.status(201).json(error);
        }
    }
}

module.exports = new CarController;

