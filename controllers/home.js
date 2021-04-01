const e = require('express');
const { request, response } = require('express');

const Home = require('../models/home');


const homeGet = (req = request, res = response) => {

    const home = new Home();


    const { box, lugar, fecha } = req.query;

    if(box == 1){
        switch(lugar){
            case 1:
                home.obtenerMetrosCubicosTrozos();
            break;
            case 2:
                home.obtenerMetrosCubicosP();
                break;
            case 3:
                home.obtenerMetrosCubicosT();
                break;
            case 4:
                home.obtenerMetrosCubicosS();
                break;
        }
        
    }else if(box == 2 || box == 3){
       const arrayBD = home.obtenerLiquidezCorriente(fecha);
       res.json({
           msg: 'bd respondio',
           hola: JSON.stringify(arrayBD)
       });
    }else{
        res.json({
            msg:`entro a else con ${box} ${lugar} ${fecha}`
        });
    }
}

module.exports = {
    homeGet
}


