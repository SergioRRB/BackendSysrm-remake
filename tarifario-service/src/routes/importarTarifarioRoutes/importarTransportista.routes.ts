import { Router } from "express"; // Importa el enrutador de Express
import { validateTransportistaCarga, validateTransportistaCourrier } from "../../middlewares/ValidateTransportista/importValidate"; // Importa los middleware de validación para transportistas
import { ImportarTransportistaCargaController, ImportarTransportistaCourrierController } from "../../controllers/importarTarifario/importarTransportista.controller"; // Importa los controladores para los transportistas

// Crea una instancia del enrutador
const router = Router();

// Crea instancias de los controladores para los transportistas
const importarTransportistaCargaController = new ImportarTransportistaCargaController(); // Controlador para transportistas de carga
const importarTransportistaCourrierController = new ImportarTransportistaCourrierController(); // Controlador para transportistas courriers

/**
 * Ruta para subir tarifarios de transportistas de carga.
 * 
 * @route POST /upload/TransportistaCarga
 * @param {validateTransportistaCarga} middleware - Middleware que valida los datos del transportista de carga antes de la inserción.
 * @param {ImportarTransportistaCargaController.insertTarifarioTransportistaCarga} controller - Controlador que maneja la inserción de tarifarios de transportistas de carga.
 */
router.post(
  "/upload/TransportistaCarga", 
  validateTransportistaCarga, 
  importarTransportistaCargaController.insertTarifarioTransportistaCarga
);

/**
 * Ruta para subir tarifarios de transportistas courriers.
 * 
 * @route POST /upload/TransportistaCourrier
 * @param {validateTransportistaCourrier} middleware - Middleware que valida los datos del transportista courrier antes de la inserción.
 * @param {ImportarTransportistaCourrierController.insertTarifarioTransportistaCourrier} controller - Controlador que maneja la inserción de tarifarios de transportistas courriers.
 */
router.post(
  "/upload/TransportistaCourrier", 
  validateTransportistaCourrier, 
  importarTransportistaCourrierController.insertTarifarioTransportistaCourrier
);

// Exporta el enrutador para su uso en otros módulos
export default router;
