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

        //Definir tipos de información recibida (JSON)
        this.app.use( express.json() )

        //Directorio público
        this.app.use( express.static('public') )
    }

 
    route(){
       
        this.app.use( '/api/user/' , require('../public/routes/users.routes.js'))
        this.app.use( '/api/products/' , require('../public/routes/products.routes.js'))

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor corriendo en: http://localhost:"+this.port)
        })
    }
}

module.exports = Server;


