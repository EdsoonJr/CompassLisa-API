const carSchema = require('../schema/carSchema.js');

class CarRepository {
    async find(payload) {
        return carSchema.find(payload);
    };

}
module.exports = new CarRepository;