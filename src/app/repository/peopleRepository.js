const peopleSchema = require('../schema/peopleSchema.js');

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
}

module.exports = new PeopleRepository;