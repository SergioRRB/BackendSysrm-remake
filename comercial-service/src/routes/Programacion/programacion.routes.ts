import { Router } from "express";
import { GuardarProgramacionController } from "../../controllers/Programacion/saveProgramacion.controller";
import { ListarProgramacionController } from "../../controllers/Programacion/listProgramacion.controller";

const router = Router();

const guardarProgramacionController = new GuardarProgramacionController();
const listarProgramacionController = new ListarProgramacionController();

router.post("/SaveProgramacion", (req, res) =>
  guardarProgramacionController.guardarProgramacion(req, res),
);
router.get(
  "/GetProgramaciones",
  listarProgramacionController.listarProgramaciones,
);

export default router;
