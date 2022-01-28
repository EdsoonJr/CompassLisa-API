const peopleService = require('../service/peopleService.js');

class PeopleController{
    async insertPeople(req,res){
        try {
            const newPeople = await peopleService.create(req.body);
            return res.status(201).json({"Pessoas":newPeople});
        } catch (error) {
            return res.status(500).json({error});
        }
    }

}

module.exports = new PeopleController;