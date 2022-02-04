/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const carService = require('../service/carService');


class CarController{
    async insertCar(req,res){
        try {
            const newCar = await carService.create(req.body);
            return res.status(201).json({"Veículo":newCar});
        } catch (error) {
            return res.status(500).json({
                'message': 'bad request',
                'details': [{ 'message': error.message }]
            });
        }
    }

    async findCars(req,res){
        try { 
            const allCars = await carService.find(req.query);
            return res.status(200).json(allCars);
            
            
        } catch (error) {
            return res.status(500).json({
                'message': 'bad request',
                'details': [{ 'message': error.message }]
            });
        }
    }

    async updateCar(req,res){
        const {id} = req.params;
        const reqCar = req.body;

        try {
            const oneCar = await carService.findOne({_id:id});
            if(!oneCar){
                return res.status(404).json({ message: 'Veículo Não Encontrado' });
            }

            const  updatedCar = await carService.update(id,reqCar);
            return res.status(200).json(updatedCar);
        } catch (error) {
            return res.status(400).json({
                'message': 'bad request',
                'details': [{ 'message': error.message }]
            });
            
        }
    }

    async deleteCar(req,res){
        try {
            const {id} = req.params; 
            const oneCar = await carService.findOne({_id:id});

            if(!oneCar){
                return res.status(404).json({ message: 'Veículo Não Encontrado' });
            }

            await carService.delete({_id:id});
            return res.status(204).json();

        } catch (error) {
            return res.status(400).json({
                'message': 'Id Inválido',
                'details': [{ 'message': error.message }]
            });   
        }
    }

    async findOneCar(req,res){
        try {
            const {id} = req.params;
            const oneCar = await carService.findOne({_id:id});
            
            if(!oneCar){
               return res.status(404).json({message: "Veículo Não encontrado"});
            }
            
            return res.status(200).json({"Veículo":oneCar});
        } catch (error) {
           return res.status(500).json({ 
            'message': 'bad request',
            'details': [{ 'message': error.message }]
           });
            
        }
    }
}

module.exports = new CarController;

