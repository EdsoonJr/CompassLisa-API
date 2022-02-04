/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const peopleSchema = require('../schema/peopleSchema');

class PeopleRepository{
    async create(payload){
        return peopleSchema.create(payload);
    }

    async find(payload){
        const myCustomLabels = {
            totalDocs: 'total',
            docs: 'Pessoas',
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
        return peopleSchema.paginate(payload,options,{});
    }

    async findOne(payload){
      return peopleSchema.findOne(payload);
  }

    async update(id,payload){
      await peopleSchema.updateOne({_id:id},payload);
      return peopleSchema.findOne({_id:id});

  }

  async delete(payload){
    return peopleSchema.deleteOne(payload);
}
}

module.exports = new PeopleRepository;