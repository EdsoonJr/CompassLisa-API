
const JoiRequire = require('joi');
const dateJoi = require ('@joi/date');
const Joi = JoiRequire.extend(dateJoi);


module.exports = async (req,res,next)=>{
    try {
       
        const schema = Joi.object({
           nome: Joi.string().min(3).required(),

           data_nascimento: Joi.date().format('DD/MM/YYYY').less('01-01-2004').max('now').required(),

           cpf: Joi.string().pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/).required(),

           email: Joi.string().email().required(),

           senha: Joi.string().min(6).required(),

           habilitado: Joi.string().required()

        })

        const { error } = await schema.validate(req.body, { abortEarly: false })

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
