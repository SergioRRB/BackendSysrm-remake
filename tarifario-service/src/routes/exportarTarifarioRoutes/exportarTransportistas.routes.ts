import { Router } from "express"; // Importa el enrutador de Express
import {
  ExportarTarifarioTransportistaCargaController,
  ExportarTarifarioTransportistaCourrierController,
} from "../../controllers/exportarTarifario/exportarTransportista.controller"; // Importa los controladores para exportar tarifarios de transportistas

// Crea una instancia de Router
const router = Router();

/**
 * Ruta para exportar tarifarios de un transportista de carga específico.
 * 
 * @route GET /exportarTransportistaCarga/:id_transportista
 * @param {string} id_transportista - ID del transportista cuya información de tarifas se desea exportar.
 * @returns {Response} - Respuesta JSON con los tarifarios del transportista de carga.
 * @throws {404} - Si no se encuentran tarifarios para el transportista.
 * @throws {500} - Error interno del servidor en caso de fallo en la operación.
 */
router.get("/exportarTransportistaCarga/:id_transportista", ExportarTarifarioTransportistaCargaController.exportarTransportistaCarga);

/**
 * Ruta para exportar tarifarios de un transportista courrier específico.
 * 
 * @route GET /exportarTransportistaCourrier/:id_transportista
 * @param {string} id_transportista - ID del transportista cuya información de tarifas se desea exportar.
 * @returns {Response} - Respuesta JSON con los tarifarios del transportista courrier.
 * @throws {404} - Si no se encuentran tarifarios para el transportista.
 * @throws {500} - Error interno del servidor en caso de fallo en la operación.
 */
router.get("/exportarTransportistaCourrier/:id_transportista", ExportarTarifarioTransportistaCourrierController.exportarTransportistaCourrier);

// Exporta las rutas definidas
export default router;
