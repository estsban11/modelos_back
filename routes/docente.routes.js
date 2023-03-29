import { getNomina, getTotalDocentes } from "../controllers/docente.js";
import {Router} from 'express';


const router = Router();

router.get('/',getNomina);

router.get('/total',getTotalDocentes);


export default router;
