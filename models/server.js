const express = require('express');
const cors = require('cors');

class Server{


    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en : ', this.port);
        });
    }

}


module.exports = Server;