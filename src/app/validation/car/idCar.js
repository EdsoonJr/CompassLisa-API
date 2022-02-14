

const Joi = require('joi');

module.exports = async (req, res, next) => {  
  try {
    const validateId = Joi.object({id: Joi.string().min(24).max(24)});
    const { error } = validateId.validate(req.params, { abortEarly: false });

    if (error){
      throw {
        'description': error.details[0].path[0],
        'name':error.message
      };
    }
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};