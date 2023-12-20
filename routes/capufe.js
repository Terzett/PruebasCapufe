
import { Router } from 'express';

import {loginRequest,rfidRequest} from '../controllers/capufe.js'

const routerCapufe=Router()

routerCapufe.get('/LoginRequest.lua', loginRequest );    //Rutas para la lectura de los datos enviados por la esp32

routerCapufe.get('/RFIDRequest.lua', rfidRequest); 

routerCapufe.get('/codeBarRequest.lua', rfidRequest); 



// routerCapufe.post('/', tokenPost );   //No tiene utilidad el POST, es solo para hacer pruebas
 








export default routerCapufe