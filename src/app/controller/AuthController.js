const bcrypt = require('bcryptjs');
const gerarToken = require('../utils/authenticate/gerarToken');
const AuthService = require('../service/AuthService');
const ErrorsMessages = require('../utils/Errors/ErrorsMessages');

class AuthController {
  async authenticateUser(req, res) {
    const { email, senha } = req.body;

    try {
      const user = await AuthService.findAuthenticate({ email });

      if (!user) {
        return ErrorsMessages.notFound(res, 'User Not Found');
      }

      if (!(await bcrypt.compare(senha, user.senha))) {
        return ErrorsMessages.invalidPassWd(res, 'Invalid Password');
      }

      const { habilitado, token } = user;

      const authUser = { email, habilitado, token };

      user.senha = undefined;

      return res.send({
        authUser,
        token: gerarToken({ id: user.id })
      });
    } catch (error) {
      return ErrorsMessages.badRequest(res, error.message);
    }
  }
}

module.exports = new AuthController();
