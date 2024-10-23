import { Router } from "express";
import { ExportarTarifarioAgenteAereoController } from "../../controllers/exportarTarifario/exportarAgente.controller";
import { ExportarTarifarioAgenteCourrierController } from "../../controllers/exportarTarifario/exportarAgente.controller";

// Crea una instancia del enrutador de Express
const router = Router();

/**
 * Ruta para exportar información del agente aéreo.
 * Se espera que se pase un parámetro de ruta `id_agente` que identifica al agente aéreo.
 * La lógica de exportación se maneja en el controlador `ExportarTarifarioAgenteAereoController`.
 *
 * @route GET /exportarAgenteAereo/:id_agente
 * @param {string} id_agente - Identificador único del agente aéreo a exportar.
 * @returns {Response} - Respuesta de la API con la información exportada.
 */
router.get("/exportarAgenteAereo/:id_agente", ExportarTarifarioAgenteAereoController.exportarAgenteAereo);

/**
 * Ruta para exportar información del agente de courrier.
 * Se espera que se pase un parámetro de ruta `id_agente` que identifica al agente de courrier.
 * La lógica de exportación se maneja en el controlador `ExportarTarifarioAgenteCourrierController`.
 *
 * @route GET /exportarAgenteCourrier/:id_agente
 * @param {string} id_agente - Identificador único del agente de courrier a exportar.
 * @returns {Response} - Respuesta de la API con la información exportada.
 */
router.get("/exportarAgenteCourrier/:id_agente", ExportarTarifarioAgenteCourrierController.exportarAgenteCourrier);

// Exporta las rutas definidas para su uso en otras partes de la aplicación
export default router;
