const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarSchema = mongoose.Schema({
  modelo: {
    type: String,
    required: true
  },

  cor: {
    type: String,
    required: true
  },

  ano: {
    type: String,
    required: true,
    min: 1950,
    max: 2022
  },

  acessorios: [
    {
      descricao: {
        type: String,
        required: true
      }
    }
  ],

  quantidadePassageiros: {
    type: Number,
    minLength: 1,
    required: true
  }
});

CarSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.__v;
  }
});

CarSchema.plugin(mongoosePaginate);
const Car = mongoose.model('Carros', CarSchema);

module.exports = Car;
