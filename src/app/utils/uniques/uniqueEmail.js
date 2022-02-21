const peopleSchema = require('../../schema/peopleSchema');

const uniques = async (email) => {
  const uniqueEmail = await peopleSchema.findOne({ email });
  if (uniqueEmail) throw new Error(`Email: ${email}  already in use`);
};

module.exports = uniques;
