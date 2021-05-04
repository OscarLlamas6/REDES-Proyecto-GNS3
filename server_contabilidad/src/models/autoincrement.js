const { Schema, model } = require('mongoose');

const ContadorSchema = new Schema({
    id: {
        type: Number,
        required: true,
    }
});

module.exports = model('vendedores', ContadorSchema);