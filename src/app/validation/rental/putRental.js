const Joi = require('joi');
const BadRequest = require('../../utils/Errors/BadRequest');
const isValidCnpj = require('../../utils/validates/isValidCnpj');

module.exports = async (req, res, next)=>{
  try {
    
    const schema = Joi.object({

      nome: Joi.string().trim().min(3),

      cnpj: Joi.string().trim().max(14).min(14).custom((value)=>{
        if(!isValidCnpj(value)){
          throw new BadRequest(`Invalid CNPJ ${value}`);
        }else{
          return true;
        }
      }).message(`Invalid CNPJ ${req.body.cnpj}`),

      atividades: Joi.string(),

      endereco: Joi.array().unique().items({
        cep: Joi.string().min(8).max(8),
        logradouro: Joi.string(),
        complemento: Joi.string(),
        bairro: Joi.string(),
        number: Joi.string().min(1).trim(),
        localidade: Joi.string(),
        uf: Joi.string(),
        isFilial: Joi.boolean(),
      }).min(1),

    });

    const { error } = await schema.validate(req.body, { abortEarly: false });

    if (error){
      throw{
        'description': error.details[0].path[0],
        'name':error.message
      };
    }

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
