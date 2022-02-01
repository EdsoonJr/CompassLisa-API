/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const peopleService = require('../service/peopleService');

class PeopleController{
    async insertPeople(req,res){
        try {
            const newPeople = await peopleService.create(req.body);
            return res.status(201).json({"Pessoa":newPeople});
        } catch (error) {
            return res.status(500).json({error});
        }
    }

    async getAllPeoples(req,res){
        try {
            const allPeoples = await peopleService.find();
            return res.status(200).json(allPeoples);

        } catch (error) {
            return res.status(500).json({error});
            
        }
    }

    async findOnePeople(req,res){
        try {
            const {id} = req.params;
            const onePeople = await peopleService.findOne({_id:id});
            
            if(!onePeople){
                return res.status(404).json({message: "Pessoa Não encontrada"});
            }
            
            return res.status(200).json({"Pessoa":onePeople});
        } catch (error) {
           return res.status(500).json({error});
            
        }
    }

    async updatePeople(req,res){
        const {id} = req.params;
        const reqPeople = req.body;
    
        try {
            const onePeople = await peopleService.findOne({_id:id});
            if(!onePeople){
                return res.status(404).json({ message: 'Pessoas Não Encontrada' });
            }
    
            const  updatedPeople = await peopleService.updateOne(id,reqPeople);
            return res.status(200).json(updatedPeople);
        } catch (error) {
            return res.status(400).json({error});
            
        }
    }


    async deletePeople(req,res){
        try {
            const {id} = req.params; 
            const onePeople = await peopleService.findOne({_id:id});

            if(!onePeople){
                return res.status(404).json({ message: 'Pessoa Não Encontrada' });
            }

            await peopleService.deleteOne({_id:id});
            return res.status(204).json();

        } catch (error) {
           return res.status(500).json({error});   
        }
    }

}

module.exports = new PeopleController;