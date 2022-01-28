const mongoose = require('mongoose');

const PeopleSchema = mongoose.Schema({
  
    nome:{
        type: String,
        required: true
    },

    cpf:{
        type: String,
        required: true
    },

    data_nascimento:{
        type: Date,
        required:true
    },

    email:{
        type: String,
        required: true
    },

    senha:{
        type: String,
        required: true
    },

    habilitado:{
        type: String,
        enum: ['sim','não'],
        default: 'sim'

    }



})

const People = mongoose.model('Peoples', PeopleSchema);

module.exports = People;