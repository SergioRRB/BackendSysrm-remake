import { Router } from "express";
import { SelectionTarifarioController } from "../../controllers/selectionTarifario/selectionTarifario.controller";

const router = Router();
const selectionTarifarioController = new SelectionTarifarioController();

router.get(
  "/selectionTarifarioCliente",
  selectionTarifarioController.getTarifario,
);

export default router;
