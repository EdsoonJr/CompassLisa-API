/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

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
        required: true
    },

    acessorios: {
        type: Array,
        required: true
    },

    quantidadePassageiros: {
        type: Number,
        required: true
    }

});

CarSchema.set('toJSON', {
    transform (doc, ret) {
     
        delete ret.__v;
    }
});

CarSchema.plugin(mongoosePaginate);
const Car = mongoose.model('Carros', CarSchema);

module.exports = Car;