import { Router } from "express"; // Importa el enrutador de Express
import { TarifaAgenteController } from "../../controllers/listarTarifario/listarAgente.controller"; // Importa el controlador para listar tarifas de agentes

// Crea una instancia del enrutador
const router = Router();

/**
 * Ruta para obtener las tarifas de un agente aéreo.
 * 
 * @route GET /getAereoAgente/:id_agente
 * @param {string} id_agente - ID del agente aéreo cuyas tarifas se desean obtener.
 * @param {TarifaAgenteController.listTarifaAgenteAereo} controller - Controlador que maneja la lógica para listar tarifas de agentes aéreos.
 */
router.get("/getAereoAgente/:id_agente", TarifaAgenteController.listTarifaAgenteAereo);

/**
 * Ruta para obtener las tarifas de un agente courrier.
 * 
 * @route GET /getCourrierAgente/:id_agente
 * @param {string} id_agente - ID del agente courrier cuyas tarifas se desean obtener.
 * @param {TarifaAgenteController.listTarifaAgenteCourrier} controller - Controlador que maneja la lógica para listar tarifas de agentes courriers.
 */
router.get("/getCourrierAgente/:id_agente", TarifaAgenteController.listTarifaAgenteCourrier);

// Exporta el enrutador para su uso en otros módulos
export default router;
