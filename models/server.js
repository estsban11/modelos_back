import express from 'express';
import docenteRoutes from '../routes/docente.routes.js';
import cors from 'cors'

class Server{

    constructor(){
        this.app = express();
        this.app.use(cors());
        this.routes();
    }

    routes(){
        this.app.use('/api/nominas',docenteRoutes);
    }


    listen(){
        this.app.listen("8000",()=>{
            console.log("Servidor corriendo en el puerto 8000")
        })
    }
}

export default Server;