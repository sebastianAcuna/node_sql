require('dotenv').config();
const Mysql  = require('./models/mysql');

// const Server = require('./models/server');
// const server = new Server();
// server.listen();

const mysql = new Mysql();
const con = mysql.creaConexion();



// mysql.conectar();
con.query('SELECT * FROM indicadores_diarios', (err, rows) => {
    if(err) throw err;

    console.log("Datos");
    console.log(rows);
});


mysql.desconect();