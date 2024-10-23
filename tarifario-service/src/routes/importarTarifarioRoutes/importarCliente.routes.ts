import { Router } from "express"; // Importa el enrutador de Express
import {
  validateClienteAereo,
  validateClienteCarga,
  validateClienteCourrier,
  validateClienteValorizado,
} from "../../middlewares/ValidateCliente/importValidate"; // Importa los middleware de validación para diferentes tipos de clientes
import {
  ImportarClienteAereoController,
  ImportarClienteCargaController,
  ImportarClienteCourrierController,
  ImportarClienteValorizadoController,
} from "../../controllers/importarTarifario/importarCliente.controller"; // Importa los controladores para los distintos tipos de clientes

// Crea una instancia del enrutador
const router = Router();

// Crea instancias de los controladores para los diferentes tipos de clientes
const importartClienteAereoController = new ImportarClienteAereoController(); // Controlador para clientes aéreos
const importarClienteCargaController = new ImportarClienteCargaController(); // Controlador para clientes de carga
const importarClienteCourrierController = new ImportarClienteCourrierController(); // Controlador para clientes courriers
const importarClienteValorizadoController = new ImportarClienteValorizadoController(); // Controlador para clientes valorizados

/**
 * Ruta para subir tarifarios de clientes aéreos.
 * 
 * @route POST /upload/ClienteAereo
 * @param {validateClienteAereo} middleware - Middleware que valida los datos del cliente aéreo antes de la inserción.
 * @param {ImportarClienteAereoController.insertTarifarioClienteAereo} controller - Controlador que maneja la inserción de tarifarios de clientes aéreos.
 */
router.post(
  "/upload/ClienteAereo", 
  validateClienteAereo, 
  importartClienteAereoController.insertTarifarioClienteAereo
);

/**
 * Ruta para subir tarifarios de clientes de carga.
 * 
 * @route POST /upload/ClienteCarga
 * @param {validateClienteCarga} middleware - Middleware que valida los datos del cliente de carga antes de la inserción.
 * @param {ImportarClienteCargaController.insertTarifarioClienteCarga} controller - Controlador que maneja la inserción de tarifarios de clientes de carga.
 */
router.post(
  "/upload/ClienteCarga", 
  validateClienteCarga, 
  importarClienteCargaController.insertTarifarioClienteCarga
);

/**
 * Ruta para subir tarifarios de clientes courriers.
 * 
 * @route POST /upload/ClienteCourrier
 * @param {validateClienteCourrier} middleware - Middleware que valida los datos del cliente courrier antes de la inserción.
 * @param {ImportarClienteCourrierController.insertTarifarioClienteCourrier} controller - Controlador que maneja la inserción de tarifarios de clientes courriers.
 */
router.post(
  "/upload/ClienteCourrier", 
  validateClienteCourrier, 
  importarClienteCourrierController.insertTarifarioClienteCourrier
);

/**
 * Ruta para subir tarifarios de clientes valorizados.
 * 
 * @route POST /upload/ClienteValorizado
 * @param {validateClienteValorizado} middleware - Middleware que valida los datos del cliente valorizado antes de la inserción.
 * @param {ImportarClienteValorizadoController.insertTarifarioClienteValorizado} controller - Controlador que maneja la inserción de tarifarios de clientes valorizados.
 */
router.post(
  "/upload/ClienteValorizado", 
  validateClienteValorizado, 
  importarClienteValorizadoController.insertTarifarioClienteValorizado
);

// Exporta el enrutador para su uso en otros módulos
export default router;
