
const Joi = require('joi');

module.exports = async (req, res, next)=>{
  try {
    const schema = Joi.object({
      modelo: Joi.string(),

      cor: Joi.string(),

      ano: Joi.number().min(1950).max(2022),

      acessorios: Joi.array().items(Joi.object()).unique(),

      quantidadePassageiros: Joi.number().integer()

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
