import { Router } from "express"; // Importa el enrutador de Express
import { TarifaraTransportistaController } from "../../controllers/listarTarifario/listarTransportista.controller"; // Importa el controlador para listar tarifas de transportistas

// Crea una instancia del enrutador
const router = Router();

/**
 * Ruta para obtener las tarifas de un transportista de carga.
 * 
 * @route GET /getCargaTransportista/:id_transportista
 * @param {string} id_transportista - ID del transportista cuyas tarifas de carga se desean obtener.
 * @param {TarifaraTransportistaController} controller - Controlador que maneja la lógica para listar tarifas de transportistas de carga.
 */
router.get("/getCargaTransportista/:id_transportista", TarifaraTransportistaController.listTarifaTransportistaCarga);

/**
 * Ruta para obtener las tarifas de un transportista courrier.
 * 
 * @route GET /getCourrierTransportista/:id_transportista
 * @param {string} id_transportista - ID del transportista cuyas tarifas de courrier se desean obtener.
 * @param {TarifaraTransportistaController} controller - Controlador que maneja la lógica para listar tarifas de transportistas courriers.
 */
router.get("/getCourrierTransportista/:id_transportista", TarifaraTransportistaController.listTarifaTransportistaCourrier);

// Exporta el enrutador para su uso en otros módulos
export default router;
