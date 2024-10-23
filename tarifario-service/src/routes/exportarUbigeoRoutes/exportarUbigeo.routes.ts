import { Router } from "express"; // Importa el enrutador de Express
import { handleExportarUbigeo } from "../../controllers/exportarUbigeo/exportarUbigeo.controller"; // Importa el controlador para manejar la exportación de ubigeos

// Crea una instancia de Router
const router = Router();

/**
 * Ruta para exportar ubigeos.
 * 
 * @route GET /exportarUbigeo
 * @returns {Response} - Respuesta que contiene la información de los ubigeos exportados.
 * @throws {500} - Error interno del servidor en caso de fallo en la operación.
 */
router.get("/exportarUbigeo", handleExportarUbigeo); // Asocia la ruta con el controlador

// Exporta las rutas definidas
export default router;
