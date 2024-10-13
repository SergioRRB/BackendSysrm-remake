import { Router } from "express";

import { TarifaAgenteController } from "../../controllers/listarTarifario/listarAgente.controller";
const router = Router();

// retorna lista vacia ya que no hay data en la tabla.

router.get(
  "/getAereoAgente/:id_agente",
  TarifaAgenteController.listTarifaAgenteAereo,
);

router.get(
  "/getCourrierAgente/:id_agente",
  TarifaAgenteController.listTarifaAgenteCourrier,
);

export default router;
