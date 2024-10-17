import { Router } from "express";
import { ExportarTarifarioAgenteAereoController } from "../../controllers/exportarTarifario/exportarAgente.controller";
import { ExportarTarifarioAgenteCourrierController } from "../../controllers/exportarTarifario/exportarAgente.controller";

const router = Router();

// Ruta para exportar tarifario agente aéreo
router.get(
  "/exportarAgenteAereo/:id_agente",
  ExportarTarifarioAgenteAereoController.exportarAgenteAereo,
);

router.get(
  "/exportarAgenteCourrier/:id_agente",
  ExportarTarifarioAgenteCourrierController.exportarAgenteCourrier,
);
export default router;
