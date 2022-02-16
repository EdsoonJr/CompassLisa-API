const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    min: 3
  },

  cnpj: {
    type: String,
    required: true,
    minLength: 14,
    maxLength: 14,
    unique: true
  },

  atividades: {
    type: String,
    required: true
  },

  endereco: [
    {
      cep: { type: String, unique: true, required: true },

      logradouro: {
        type: String,
        required: true
      },

      complemento: {
        type: String,
        required: false
      },

      bairro: {
        type: String,
        required: true
      },

      number: {
        type: String,
        required: true
      },

      localidade: {
        type: String,
        required: true
      },

      uf: {
        type: String,
        minLength: 2,
        required: true
      },

      isFilial: {
        type: Boolean,
        required: true,
        default: false
      },

      _id: false
    }
  ]
});
RentalSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.__v;
  }
});

RentalSchema.plugin(mongoosePaginate);

const Locadora = mongoose.model('Locadora', RentalSchema);

module.exports = Locadora;
