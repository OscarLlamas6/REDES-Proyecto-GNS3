
const { Schema, model } = require('mongoose');

const VendedorSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    dpi: {
        type: Number,
        required: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
    direccion:{
        type: String,
        required: false,
    },
    telefono: {
        type: String,
        required: false,
    }
} ,
{ timestamps: true });

module.exports = model('vendedores', VendedorSchema);