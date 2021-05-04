const express = require('express');
const router = express.Router();
const Libro = require('../models/libro.js');
const Vendedor = require('../models/vendedor')



router.get('/', async (req,res)=>{
    // dirname da el valor del directorio donde se ejecuta
    //console.log(__dirname );
    // necestio en modulo path para poder concatenar de forma correcta los directorios
    //console.log(path.join(__dirname, 'views/index.ejs'));// ya sabe en que sistema operativo estoy y lo convierte por ejemplo / en \
    const Vendedores =  await Vendedor.find();
    res.render('index', {
        Vendedores //libros: libros acepta las 2 formas 
    });//respondo con la pagina web, puedo pasarle un parametro para tener objetos 
});


router.post('/add' , async (req,res) =>{

    try{
        const all_ = await Vendedor.count();
        console.log(all_+1);
        req.body['id'] = all_+1;
        const obj = new Vendedor(req.body); // devuelve un objeto que tiene propiedades para guardarse dentro de la base de datos o actualizarce etc.
        await obj.save();
        res.redirect('/');
    }catch(error){
        console.log("error regionMasInfectada");
    }

});

module.exports = router;