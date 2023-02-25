const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const app = express();

//Importando rutas
const playerRoutes = require('./routes/players');


//Configuracion
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;
const HOST = process.env.DB_HOST || 'localhost';
const USER = process.env.DB_USER || 'root';
const PASSWORD = process.env.DB_PASSWORD || '';
const DBNAME = process.env.DB_NAME || 'warehose_of_players';
const DBPORT = process.env.DB_PORT || '3306';

app.use(myConnection(mysql, {
	host: HOST,
	user: USER,
	password: PASSWORD,
	port: DBPORT,
	database: DBNAME 
}, 'single'));

app.use(express.urlencoded({extended:false}));

//Rutas
app.use('/', playerRoutes);

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

//Iniciando el Servidor
app.listen(PORT, () =>{
	console.log('Servidor corriendo en el puerto', PORT);
});