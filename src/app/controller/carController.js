const carService = require('../service/carService');


class CarController{
    async insertCar(req,res){
        try {
            const newCar = await carService.create(req.body)
            return res.status(201).json({"Veículo":newCar})
        } catch (error) {
            return res.status(500).json({error})
        }
    }

    async findCars(req,res){
        try {
            const modelo = req.query.modelo
            if(modelo){
                const queryCar = await carService.find({modelo:{$regex:modelo,$options:"i"}});
                return res.status(200).json({"Veículo":queryCar})
            }else{
            const allCars = await carService.find({});
            return res.status(200).json({"Veículos":allCars});
            }
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteCar(req,res){
        try {
            const id = req.params.id 


            const oneCar = await carService.findOne({_id:id})

            if(!oneCar){
                return res.status(404).json({ message: 'Veículo Não Encontrado' });
            }

            await carService.deleteOne({_id:id})
            return res.status(204).json()

        } catch (error) {
            res.status(500).json({
                'message': 'Bad request',
                'details': [{ 'message': error }]
            })
            
        }
    }

    async findOneCar(req,res){
        try {
            const id = req.params.id

            const oneCar = await carService.findOne({_id:id})
            
            if(!oneCar){
                res.status(404).json({message: "Veículo Não encontrado"})
            }
            return res.status(200).json({"Veículo":oneCar});
        } catch (error) {
            res.status(500).json({
                'message': 'Bad request',
                'details': [{ 'message': error }]
            })
            
        }
    }
}

module.exports = new CarController;

