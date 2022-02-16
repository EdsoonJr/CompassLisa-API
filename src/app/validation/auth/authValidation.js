
const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next)=>{
  
  try {
   
    const schema = Joi.object({
      email: Joi.string().email().required(),
      senha: Joi.string().min(6).required(), 
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    
    if (error){
      throw   {
        'description': error.details[0].path[0],
        'name':error.message
      };
    }
        
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
