import { Router } from "express";
import { GuardarProgramacionController } from "../../controllers/Programacion/saveProgramacion.controller";
import { ListarProgramacionController } from "../../controllers/Programacion/listProgramacion.controller";
import { eliminarProgramacionController } from "../../controllers/Programacion/eliminarProgramacion.controller";

// Crear una nueva instancia del enrutador de Express
const router = Router();

// Instancia del controlador para listar programaciones
const listarProgramacionController = new ListarProgramacionController();

/**
 * Ruta para guardar una programación.
 * Método: POST
 * Endpoint: /SaveProgramacion
 * Controlador: GuardarProgramacionController.guardarProgramacion
 * Descripción: Permite guardar una nueva programación en el sistema.
 * Body esperado: Datos de programación definidos en el DTO correspondiente.
 */
router.post("/SaveProgramacion", (req, res) =>
  GuardarProgramacionController.guardarProgramacion(req, res),
);

/**
 * Ruta para obtener la lista de programaciones.
 * Método: GET
 * Endpoint: /GetProgramaciones
 * Controlador: ListarProgramacionController.listarProgramaciones
 * Descripción: Devuelve una lista de todas las programaciones registradas.
 */
router.get(
  "/GetProgramaciones",
  listarProgramacionController.listarProgramaciones,
);

/**
 * Ruta para eliminar una programación específica.
 * Método: DELETE
 * Endpoint: /DeleteProgramacion/:id
 * Controlador: eliminarProgramacionController
 * Descripción: Elimina una programación según el ID proporcionado en la URL.
 * Parámetro de la URL: id (identificador único de la programación a eliminar).
 */
router.delete("/DeleteProgramacion/:id", eliminarProgramacionController);

// Exportar el enrutador para ser utilizado en otras partes de la aplicación
export default router;
