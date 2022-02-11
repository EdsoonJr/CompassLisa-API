const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = mongoose.Schema({

  nome:{
    type: String,
    required: true,
    min: 3
  },

  cnpj:{
    type: String,
    required: true,
    minLength:14,
    maxLength: 14,
    unique: true,
  },

  atividades:{
    type: String,
    required: true
  },

  endereco:[
    {
      cep:{type: String,
        minLength:8,
        maxLength: 8,
        required:true},

      number: {
        type:String, 
        required:true},

      complemento: {
        type: String},

      isFilial:{
        type: Boolean, 
        required:true,
        default:false}

    }
  ]

});
RentalSchema.set('toJSON', {
  transform (doc, ret) {
    delete ret.__v;
  }
});

RentalSchema.plugin(mongoosePaginate);

const Locadora = mongoose.model('Locadora', RentalSchema);

module.exports = Locadora;