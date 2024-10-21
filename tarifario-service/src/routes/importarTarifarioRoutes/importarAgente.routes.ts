import { Router } from 'express';
import { validateAgenteAereo, validateAgenteCourrier } from '../../middlewares/ValidateAgente/importValidate';
import { ImportarAgenteAereroController, ImportartAgenteCourrierController } from '../../controllers/importarTarifario/importarAgente.controller';

const router = Router();
const importatAgenteController = new ImportarAgenteAereroController();
const importartAgenteCourrierController = new ImportartAgenteCourrierController();


router.post('/upload/AgenteAereo', validateAgenteAereo, importatAgenteController.insertTarifarioAgenteAereo);
router.post('/upload/AgenteCourrier', validateAgenteCourrier, importartAgenteCourrierController.insertTarifarioAgenteCourrier);

export default router;
