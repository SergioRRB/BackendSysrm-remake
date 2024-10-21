import { Router } from 'express';
import { validateAgente } from '../../middlewares/validate';
import { ImportarAgenteController } from '../../controllers/importarTarifario/importarAgente.controller';

const router = Router();
const importatAgenteController = new ImportarAgenteController();

router.post('/tarifarioAereo', validateAgente, importatAgenteController.insertTarifarioAgenteAereo);

export default router;
