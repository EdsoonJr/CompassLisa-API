const Joi = require('joi');

module.exports = async (req, res, next) => {  
  try {
    const { error } = await Joi.string().validate(req.params.id, { abortEarly: false });
    
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}