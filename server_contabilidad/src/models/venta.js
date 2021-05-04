
const { Schema, model } = require('mongoose');

const VentaSchema = new Schema({
    id_vendedor: {
        type: Number,
        required: true,
    },
    nombre:{
        type: String,
        required: true,
    },
    fecha: {
        type:  String,
        required: true,
        default: Date.now()
    }
} ,
{ timestamps: true });

module.exports = model('ventas', VentaSchema);