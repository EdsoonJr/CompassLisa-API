const Joi = require('joi').extend(require('@joi/date'));
const BadRequest = require('../../utils/Errors/BadRequest');
const isValidCPF = require('../../utils/validates/isValidCpf');

module.exports = async (req, res, next)=>{
  
  try {
     
    const schema = Joi.object({
      nome: Joi.string().min(3),

      data_nascimento: Joi.date().format('DD/MM/YYYY').less('01-01-2004').max('now'),

      cpf: Joi.string().min(11).max(11).custom((value)=>{
        if(!isValidCPF(value)){
          throw new BadRequest(`Invalid CPF ${value}`);
        }else{
          return true;
        }
      }).message(`Invalid CPF ${req.body.cpf}`),

      email: Joi.string().email(),

      senha: Joi.string().min(6),

      habilitado: Joi.string()

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
