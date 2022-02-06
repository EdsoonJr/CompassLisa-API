
const peopleSchema = require('../schema/peopleSchema');

class AuthRepository {
  
  async findAuthenticate(payload){
    return  peopleSchema.findOne(payload).select('+senha');
  }


}
module.exports = new AuthRepository;