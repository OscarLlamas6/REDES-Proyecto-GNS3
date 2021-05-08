const express = require('express');
const router = express.Router();
const Venta = require('../models/venta');
router.get('/', async (req,res)=>{
    const Ventas =[]; //=  await Venta.find();
    res.render('index', {
        Ventas //Ventas: Ventas acepta las 2 formas
    });//respondo con la pagina web, puedo pasarle un parametro para tener objetos 
});
module.exports = router;