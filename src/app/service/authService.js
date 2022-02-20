const AuthRepository = require('../repository/AuthRepository');

class AuthService {
  async findAuthenticate(payload) {
    return AuthRepository.findAuthenticate(payload);
  }
}

module.exports = new AuthService();
