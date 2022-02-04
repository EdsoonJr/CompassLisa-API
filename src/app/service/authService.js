/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
const authRepository = require('../repository/authRepository');

class AuthService{

    async findAuthenticate(payload){
        return await authRepository.findAuthenticate(payload);
        
    }
}

module.exports = new AuthService;