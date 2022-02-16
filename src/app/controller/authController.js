const bcrypt = require('bcryptjs');
const gerarToken = require('../utils/authenticate/gerarToken');
const authService = require('../service/authService');
const ErrorsMessages = require('../utils/Errors/ErrorsMessages');

class AuthController {
  async authenticateUser(req, res) {
    const { email, senha } = req.body;

    try {
      const authUser = await authService.findAuthenticate({ email });

      if (!authUser) {
        return ErrorsMessages.notFound(res, 'User Not Found');
      }

      if (!(await bcrypt.compare(senha, authUser.senha))) {
        return ErrorsMessages.invalidPassWd(res, 'Invalid Password');
      }

      authUser.senha = undefined;

      return res.send({
        authUser,
        token: gerarToken({ id: authUser.id })
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

module.exports = new AuthController();
