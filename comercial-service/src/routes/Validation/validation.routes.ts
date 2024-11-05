import { Router } from "express";
import { ValidacionesController } from "../../controllers/Validation/validation.controller";
import { DesaprobarValidacionesController } from "../../controllers/Validation/desaprobarValidation.controller";
import { AprobarValidacionesController } from "../../controllers/Validation/aprobarValidation.controller";
import { ExportarValidacionesController } from "../../controllers/Validation/exportarValidation.controller";
import { enviarValidacionController } from "../../controllers/Validation/enviarValidation.controller";

// Crear una instancia de Router
const router = Router();
const exportarValidacionesController = new ExportarValidacionesController();

/**
 * @route GET /getValidaciones
 * @desc Obtiene todas las validaciones
 * @access Public
 */
router.get("/getValidaciones", ValidacionesController.listarValidaciones);

/**
 * @route POST /desaprobar/:id
 * @desc Desaprueba una validación por su ID
 * @param {number} id - ID de la validación a desaprobar
 * @access Public
 */
router.post("/desaprobar/:id", DesaprobarValidacionesController.desaprobar);

/**
 * @route POST /aprobar-validacion
 * @desc Aprueba una validación
 * @access Public
 */
router.post(
  "/aprobar-validacion",
  AprobarValidacionesController.aprobarValidacion,
);

/**
 * @route GET /exportar-validaciones
 * @desc Exporta las validaciones en un formato estructurado
 * @access Public
 */
router.get("/exportar-validaciones", (req, res) =>
  exportarValidacionesController.exportarValidaciones(req, res),
);

/**
 * @route POST /enviar-validacion
 * @desc Envía una validación para una cotización
 * @access Public
 */
router.post("/enviar-validacion", enviarValidacionController);

// Exportar las rutas
export default router;
