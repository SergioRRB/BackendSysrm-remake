import { Router } from "express";
import { GuardarAsignacionRecojoController } from "../../controllers/AsignacionRecojo/GuardarAsignacionRecojo.controller";
import { ObtenerAsignacionRecojoController } from "../../controllers/AsignacionRecojo/ObtenerAsignacionRecojo.controller";

const router = Router();

// Instancia del controlador para guardar asignaciones de recojo.
const guardarAsignacionRecojoController =
  new GuardarAsignacionRecojoController();

// Instancia del controlador para obtener asignaciones de recojo.
const obtenerAsignacionRecojoController =
  new ObtenerAsignacionRecojoController();

/**
 * Ruta para guardar o actualizar una asignación de recojo.
 * Método: POST
 * Endpoint: /SaveAsignacionRecojo
 * Controlador: GuardarAsignacionRecojoController.guardarAsignacion
 */
router.post(
  "/SaveAsignacionRecojo",
  guardarAsignacionRecojoController.guardarAsignacion,
);

/**
 * Ruta para obtener asignaciones de recojo.
 * Método: GET
 * Endpoint: /GetAsignacionRecojo
 * Controlador: ObtenerAsignacionRecojoController.obtenerAsignaciones
 */
router.get(
  "/GetAsignacionRecojo",
  obtenerAsignacionRecojoController.obtenerAsignaciones.bind(
    obtenerAsignacionRecojoController,
  ),
);

export default router;
