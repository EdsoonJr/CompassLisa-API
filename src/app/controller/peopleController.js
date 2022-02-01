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

}

module.exports = new PeopleController;