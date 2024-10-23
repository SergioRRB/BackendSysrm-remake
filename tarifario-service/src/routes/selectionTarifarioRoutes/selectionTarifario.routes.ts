import { Router } from "express"; // Importa el enrutador de Express
import { SelectionTarifarioController } from "../../controllers/selectionTarifario/selectionTarifario.controller"; // Importa el controlador para la selección de tarifas

// Crea una instancia del enrutador
const router = Router();
const selectionTarifarioController = new SelectionTarifarioController();

/**
 * Ruta para obtener el tarifario de un cliente.
 * 
 * @route GET /selectionTarifarioCliente
 * @description Esta ruta permite obtener el tarifario correspondiente a un cliente. 
 * La lógica para obtener los datos está gestionada por el controlador `SelectionTarifarioController`.
 * 
 * @param {SelectionTarifarioController} controller - Controlador que maneja la lógica de selección de tarifas.
 */
router.get("/selectionTarifarioCliente", selectionTarifarioController.getTarifario);

// Exporta el enrutador para su uso en otros módulos
export default router;
