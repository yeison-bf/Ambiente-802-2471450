const express = require('express')
const cors = require('cors')


class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;


        //Middleware
        this.middlewares();

        //Rutas
        this.route();
    }

    //Middlewares
    middlewares(){
        //Definición del cors
        this.app.use(cors())

        //Directorio público
        this.app.use( express.static('public') )
    }

 
    route(){
       
        this.app.use( '/api/user/' , require('../public/routes/users.routes.js'))

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor (No te creo) corriendo en: http://localhost:"+this.port)
        })
    }
}

module.exports = Server;


