// src/routes/programacionRoutes.ts
import { Router } from "express";
import { ProgramacionController } from "../../controllers/Programacion/saveProgramacion.controller";

const router = Router();
const programacionController = new ProgramacionController();

router.post("/programacion", (req, res) =>
  programacionController.guardarProgramacion(req, res),
);

export default router;
