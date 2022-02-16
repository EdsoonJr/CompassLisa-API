const authRepository = require('../repository/authRepository');

class AuthService {
  async findAuthenticate(payload) {
    return authRepository.findAuthenticate(payload);
  }
}

module.exports = new AuthService();
