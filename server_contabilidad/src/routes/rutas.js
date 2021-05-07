const express = require('express');
const router = express.Router();
const Venta = require('../models/venta');




router.get('/', async (req,res)=>{
    // dirname da el valor del directorio donde se ejecuta
    //console.log(__dirname );
    // necestio en modulo path para poder concatenar de forma correcta los directorios
    //console.log(path.join(__dirname, 'views/index.ejs'));// ya sabe en que sistema operativo estoy y lo convierte por ejemplo / en \
    const Ventas =[]; //=  await Venta.find();
    res.render('index', {
        Ventas //Ventas: Ventas acepta las 2 formas
    });//respondo con la pagina web, puedo pasarle un parametro para tener objetos 
});





module.exports = router;