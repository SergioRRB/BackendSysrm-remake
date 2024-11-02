import { Router } from "express";
import { ValidacionesController } from "../../controllers/Validation/validation.controller";
import { DesaprobarValidacionesController } from "../../controllers/Validation/desaprobarValidation.controller";
import { aprobarValidacionesController } from "../../controllers/Validation/aprobarValidation.controller";
import { ExportarValidacionesController } from "../../controllers/Validation/exportarValidation.controller";
import { enviarValidacionController } from "../../controllers/Validation/enviarValidation.controller";

const router = Router();
const exportarValidacionesController = new ExportarValidacionesController();

// Ruta para obtener todas las validaciones
router.get("/getValidaciones", ValidacionesController.listarValidaciones);
router.post("/desaprobar/:id", DesaprobarValidacionesController.desaprobar);
router.post(
  "/aprobar-validacion",
  aprobarValidacionesController.aprobarValidacion.bind(
    aprobarValidacionesController,
  ),
);
router.get("/exportar-validaciones", (req, res) =>
  exportarValidacionesController.exportarValidaciones(req, res),
);

router.post("/enviar-validacion", enviarValidacionController);
export default router;
