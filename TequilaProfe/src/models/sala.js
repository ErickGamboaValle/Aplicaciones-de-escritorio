const mongoose = require('mongoose');
const Schema = mongoose.Schema

const sala_squema = new Schema({
    id_sala : {
        type : Number,
        required : true
    },
    nombre :{
        type : String,
        require : true
    },
    mensajes : {
        type: Array,
        require : true
    },
    admin : {
        type : String,
    },
    url : {
        type : String
    }

}, {timestamps : true});

const Sala = mongoose.model('Sala', sala_squema);
module.exports = Sala;