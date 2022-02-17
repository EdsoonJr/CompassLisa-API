const rentalSchema = require('../../schema/rentalSchema');

const uniques = async (cnpj) => {
  const uniqueCnpj = await rentalSchema.findOne({ cnpj });
  if (uniqueCnpj) throw new Error(`CNPJ: ${cnpj}  already in use`);
};

module.exports = uniques;
