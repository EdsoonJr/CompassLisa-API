const jwt = require('jsonwebtoken');
const auth = require('../../config/auth.json');

module.exports = (req, res, next) => {
  try {
    const tokenBearer = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(tokenBearer, auth.secret);

    req.client = decode;

    return next();
  } catch (error) {
    return res.status(401).send({
      description: 'Token Bearer',
      message: 'Your token is invalid'
    });
  }
};
