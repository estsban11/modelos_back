import xlsx from 'xlsx';
import Server from "./models/server.js";
import {MostrarNomina} from './models/docente.js';

MostrarNomina()

const server = new Server();
server.listen();



