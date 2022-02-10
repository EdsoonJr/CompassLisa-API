const peopleSchema = require('../../schema/peopleSchema');

const uniques = async(cpf) =>{

  const uniqueCpf = await peopleSchema.findOne({cpf});
  if(uniqueCpf) throw new Error(`CPF:${cpf} já existe`);

};

module.exports = uniques;