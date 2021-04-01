const mysql = require('mysql');



class Mysql{


    constructor(){
        
        this.host = 'www.zcloud16.cl';
        this.user = 'mantencion';
        this.password = 'mantzionit301';
        this.database = 'panel_sistemas';
        this.coneccion  =  this.creaConexion();

    }


    creaConexion(){
        return mysql.createConnection({
            host : this.host,
            user  : this.user,
            password : this.password,
            database : this.database
        });
    }



    desconect(){
        this.coneccion.destroy((err) =>{
            if(err) throw err;
            console.log('Disconnected');
        });
    }

    conectar(){
        this.coneccion.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
          });
    }

   
}


module.exports = Mysql;