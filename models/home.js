const { response } = require('express');
const Mysql  = require('./mysql');

class Home{
    constructor(){
        this.mysql = new Mysql();
        this.con = this.mysql.creaConexion();
    }



    obtenerLiquidezCorriente  () {
        // mysql.conectar();
        const array = [];
        try{
            this.con.query('SELECT * FROM indicadores_diarios ;', 
            (err, rows) => {
                if(err) throw err;
                // console.log("Datos");
                // console.log(rows);

                this.mysql.desconect();

                array =  rows;
            });

            return array;
        }catch(err){
            return [err];
        }
        
        
    }


    obtenerMetrosCubicosP(){



    }

    obtenerMetrosCubicosT(){

    }

    obtenerMetrosCubicosS(){

    }

    obtenerMetrosCubicosTrozos(){

    }


}


module.exports = Home;