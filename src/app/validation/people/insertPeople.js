


const Joi = require('joi').extend(require('@joi/date'));


module.exports = async (req, res, next)=>{
  
    try {
        function isValidCPF(cpf) {
            if (typeof cpf !== "string") return false;
            cpf = cpf.replace(/[\s.-]*/igm, '');
            if (
                !cpf ||
                cpf.length !== 11 ||
                cpf === "00000000000" ||
                cpf === "11111111111" ||
                cpf === "22222222222" ||
                cpf === "33333333333" ||
                cpf === "44444444444" ||
                cpf === "55555555555" ||
                cpf === "66666666666" ||
                cpf === "77777777777" ||
                cpf === "88888888888" ||
                cpf === "99999999999" 
            ) {
                return false;
            }
            let soma = 0;
            let resto;
            for (var i = 1; i <= 9; i++) 
                soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
            resto = (soma * 10) % 11;
            if ((resto === 10) || (resto === 11))  resto = 0;
            if (resto !== parseInt(cpf.substring(9, 10)) ) return false;
            soma = 0;
            for (var i = 1; i <= 10; i++) 
                soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
            resto = (soma * 10) % 11;
            if ((resto === 10) || (resto === 11))  resto = 0;
            if (resto !== parseInt(cpf.substring(10, 11) ) ) return false;
            return true;
        }
       
        const schema = Joi.object({
           nome: Joi.string().min(3).required(),

           data_nascimento: Joi.date().format('DD/MM/YYYY').less('01-01-2004').max('now').required(),

           cpf: Joi.string().required(),

           email: Joi.string().email().required(),

           senha: Joi.string().min(6).required(),

           habilitado: Joi.string().required()

        });

        const { error } = await schema.validate(req.body, { abortEarly: false });
    
        if (error){
            throw   {
                message:'Bad Request',
                details: error.details
            };
        }

        if(!isValidCPF(req.body.cpf)){
            throw {
                message: 'Bad Request',
                details: 'CPF inválido'
              };
        }
        

        return next();
    } catch (error) {
         return res.status(400).json(error);
    }
};
