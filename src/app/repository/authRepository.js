/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
const peopleSchema = require('../schema/peopleSchema');

class AuthRepository {
  
    async findAuthenticate(payload){
        return await peopleSchema.findOne(payload).select('+senha');
    }


}
module.exports = new AuthRepository;