const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
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
        type: String,
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
PeopleSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.__v;
    }
});

PeopleSchema.plugin(mongoosePaginate)

const People = mongoose.model('Peoples', PeopleSchema);

module.exports = People;