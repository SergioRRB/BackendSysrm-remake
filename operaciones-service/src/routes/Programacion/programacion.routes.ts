import { Router } from "express";
import { GuardarProgramacionController } from "../../controllers/Programacion/saveProgramacion.controller";
import { ListarProgramacionController } from "../../controllers/Programacion/listProgramacion.controller";
import { eliminarProgramacionController } from "../../controllers/Programacion/eliminarProgramacion.controller";

const router = Router();

const listarProgramacionController = new ListarProgramacionController();

router.post("/SaveProgramacion", (req, res) =>
  GuardarProgramacionController.guardarProgramacion(req, res),
);
router.get(
  "/GetProgramaciones",
  listarProgramacionController.listarProgramaciones,
);
router.delete("/DeleteProgramacion/:id", eliminarProgramacionController);

export default router;
