const carSchema = require('../schema/carSchema.js');

class CarRepository {
    async create(payload){
        return carSchema.create(payload)
    }

    async find(payload) {
        return carSchema.find(payload);
    };

}
module.exports = new CarRepository;