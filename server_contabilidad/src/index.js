const cors = require('cors');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const indexRoutes = require('./routes/rutas');
const { dbConnection } = require('./db/config');
const app = express();

// DB Connection
//dbConnection();

// settings
app.set('port',4200);
app.set('views',path.join(__dirname,'views')); // para que encuentre la carpeta views
app.set('view engine','ejs');

// middlawares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))//entiende los formularios de html ,extended false porque no vienen imagenes solo texto , SIN ESTO NO PUEDO MANDAR objetos  POR FORMULARIOS


//rutas
app.use('/',indexRoutes);


//archivos estaticos
app.use(express.static(path.join(__dirname,"public")));

// Manejador de rutas
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});