/* eslint-disable class-methods-use-this */
const carSchema = require('../schema/carSchema');

class CarRepository {
    async create(payload){
        return carSchema.create(payload);
    }

    async find(payload) {
        const myCustomLabels = {
            totalDocs: 'total',
            docs: 'Veículos',
            totalPages: 'offsets',
            page: 'offset',
            nextPage: false,
            prevPage: false,
            pagingCounter: false,
            meta: false,
            hasPrevPage: false,
            hasNextPage: false
          };
          const options = {
            page: 1,
            limit: 5,
            customLabels: myCustomLabels
          };
        return carSchema.paginate(payload,options,{});
    }

    async findOne(payload){
        return carSchema.findOne(payload);
    }

    async deleteOne(payload){
        return carSchema.deleteOne(payload);
    }

    async updateOne(id,payload){
        await carSchema.updateOne({_id:id},payload);
        return carSchema.findOne({_id:id});

    }

}
module.exports = new CarRepository;