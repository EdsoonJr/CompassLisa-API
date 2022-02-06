/* eslint-disable no-useless-escape */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const bcrypt = require('bcryptjs');

const PeopleSchema = mongoose.Schema({
  
    nome:{
        type: String,
        required: true,
        min: 3
    },

    cpf:{
        type: String,
        required: true,
        minLength:11,
		maxLength: 11,
		unique: true,
    },

    data_nascimento:{
        type: String,
        required:true
    },

    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    senha:{
        type: String,
        required: true,
        minLength: 6,
        select: false
    },

    habilitado:{
        type: String,
        enum: ['sim','não'],
        default: 'sim'

    }

});
PeopleSchema.set('toJSON', {
    transform (doc, ret) {
        delete ret.__v;
    }
});

PeopleSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();
  });

PeopleSchema.plugin(mongoosePaginate);

const People = mongoose.model('Peoples', PeopleSchema);

module.exports = People;