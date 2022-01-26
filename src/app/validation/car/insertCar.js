const JoiRequire = require('joi');
const dateJoi= require('@joi/date');
const Joi = JoiRequire.extend(dateJoi)

module.exports = async (req,res,next)=>{
    try {
        const schema = Joi.object({
           modelo: Joi.string().required(),

           cor: Joi.string().required(),

           ano: Joi.number().min(1950).max(2021).required(),

           acessorios: Joi.array().items(Joi.object().required()).unique().required(),

           quantidadePassageiros: Joi.number().integer().required()

        })

        const { error } = await schema.validate(req.body, { abortEarl: true })

        if (error){
            throw{
                message:'Bad Request',
                details: error.details
            }
        }
        return next();
    } catch (error) {
         return res.status(400).json(error);
    }
}
