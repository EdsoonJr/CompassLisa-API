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

}
module.exports = new CarRepository;