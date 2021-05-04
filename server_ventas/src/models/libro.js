
const { Schema, model } = require('mongoose');

const LibroSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    autor:{
        type: String,
        required: true,
    },
    editorial: String
    ,},
    { timestamps: true });

module.exports = model('libros', LibroSchema);