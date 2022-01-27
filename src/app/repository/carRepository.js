const carSchema = require('../schema/carSchema.js');

class CarRepository {
    async create(payload){
        return carSchema.create(payload);
    }

    async find(payload) {
        return carSchema.find(payload);
    }

    async findOne(payload){
        return carSchema.findOne(payload)
    }

    async deleteOne(payload){
        return carSchema.deleteOne(payload)
    }

    async updateOne(id,payload){
        await carSchema.updateOne({_id:id},payload);
        return carSchema.findOne({_id:id});

    }

}
module.exports = new CarRepository;