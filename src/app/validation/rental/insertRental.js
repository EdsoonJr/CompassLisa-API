
const Joi = require('joi');

module.exports = async (req, res, next)=>{
  try {
    
    function cnpjValidation(value) {
      if (!value) return false;
    
      const isString = typeof value === 'string';
      const validTypes = isString || Number.isInteger(value) || Array.isArray(value);
    
      if (!validTypes) return false;
    
      if (isString) {
        
        if (value.length > 18) return false;
    
        const digitsOnly = /^\d{14}$/.test(value);
        
        const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value);
    
        if (digitsOnly || validFormat) true;
    
        else return false;
      }

      const match = value.toString().match(/\d/g);
      const numbers = Array.isArray(match) ? match.map(Number) : [];
    
      if (numbers.length !== 14) return false;
    
      const items = [...new Set(numbers)];
      if (items.length === 1) return false;
    
      const calc = (x) => {
        const slice = numbers.slice(0, x);
        let factor = x - 7;
        let sum = 0;
    
        for (let i = x; i >= 1; i--) {
          const n = slice[x - i];
          sum += n * factor--;
          if (factor < 2) factor = 9;
        }
    
        const result = 11 - (sum % 11);
    
        return result > 9 ? 0 : result;
      };
  
      const digits = numbers.slice(12);
      
      const digit0 = calc(12);
      if (digit0 !== digits[0]) return false;
    
      const digit1 = calc(13);
      return digit1 === digits[1];
    }

    const schema = Joi.object({

      nome: Joi.string().trim().min(3).required(),

      cnpj: Joi.string().trim().max(14).min(14).required(),

      atividades: Joi.string().required(),

      endereco: Joi.array().unique().items({
        cep: Joi.string().min(8).max(8).required(),
        logradouro: Joi.string(),
        complemento: Joi.string(),
        bairro: Joi.string(),
        number: Joi.string().min(1).trim().required(),
        localidade: Joi.string(),
        uf: Joi.string(),
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

    if(!cnpjValidation(req.body.cnpj)){
      throw {
        'description': 'Bad Request',
        'name': `Invalid CNPJ ${req.body.cnpj}`
      };
    }

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
