
const Joi = require('joi').extend(require('@joi/date'));
const isValidCpf = require('../../utils/validates/isValidCpf');
const BadRequest = require('../../utils/Errors/BadRequest');


module.exports = async (req, res, next)=>{
  
  try {
   
    const schema = Joi.object({
      nome: Joi.string().min(3).required(),

      data_nascimento: Joi.date().format('DD/MM/YYYY').less('01-01-2004').max('now').required(),

      cpf: Joi.string().min(11).max(11).required().custom((value)=>{
        if(!isValidCpf(value)){
          throw new BadRequest(`Invalid CPF ${value}`);
        }else{
          return true;
        }
      }).message(`Invalid CPF ${req.body.cpf}`),

      email: Joi.string().email().required(),

      senha: Joi.string().min(6).required(),

      habilitado: Joi.string().required()

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
