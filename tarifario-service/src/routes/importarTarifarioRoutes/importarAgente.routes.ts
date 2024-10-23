import { Router } from 'express'; // Importa el enrutador de Express
import { validateAgenteAereo, validateAgenteCourrier } from '../../middlewares/ValidateAgente/importValidate'; // Importa los middleware de validación
import { ImportarAgenteAereroController, ImportartAgenteCourrierController } from '../../controllers/importarTarifario/importarAgente.controller'; // Importa los controladores para agentes aéreos y courriers

// Crea una instancia del enrutador
const router = Router();

// Crea instancias de los controladores
const importatAgenteController = new ImportarAgenteAereroController(); // Controlador para agentes aéreos
const importartAgenteCourrierController = new ImportartAgenteCourrierController(); // Controlador para agentes courriers

/**
 * Ruta para subir tarifarios de agentes aéreos.
 * 
 * @route POST /upload/AgenteAereo
 * @param {validateAgenteAereo} middleware - Middleware que valida los datos del agente aéreo antes de la inserción.
 * @param {ImportarAgenteAereroController.insertTarifarioAgenteAereo} controller - Controlador que maneja la inserción de tarifarios de agentes aéreos.
 */
router.post('/upload/AgenteAereo', validateAgenteAereo, importatAgenteController.insertTarifarioAgenteAereo);

/**
 * Ruta para subir tarifarios de agentes courriers.
 * 
 * @route POST /upload/AgenteCourrier
 * @param {validateAgenteCourrier} middleware - Middleware que valida los datos del agente courrier antes de la inserción.
 * @param {ImportartAgenteCourrierController.insertTarifarioAgenteCourrier} controller - Controlador que maneja la inserción de tarifarios de agentes courriers.
 */
router.post('/upload/AgenteCourrier', validateAgenteCourrier, importartAgenteCourrierController.insertTarifarioAgenteCourrier);

// Exporta el enrutador para su uso en otros módulos
export default router;
