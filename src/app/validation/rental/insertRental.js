
const Joi = require('joi');

module.exports = async (req, res, next)=>{
  try {
    const schema = Joi.object({
      nome: Joi.string().min(3).required(),

      cnpj: Joi.string().max(14).min(14).required(),

      atividades: Joi.string().required(),

      endereco: Joi.array().unique().items({
        cep: Joi.string().required(),
        logradouro: Joi.string().required(),
        complemento: Joi.string(),
        bairro: Joi.string().required(),
        number: Joi.string().required(),
        localidade: Joi.string().required(),
        uf: Joi.string().required(),
        isFilial: Joi.boolean().required(),
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
