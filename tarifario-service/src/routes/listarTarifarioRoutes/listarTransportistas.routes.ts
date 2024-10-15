// src/routes/tarifarioTransportistaCarga.routes.ts

import { Router } from "express";
import { TarifaraTransportistaController } from "../../controllers/listarTarifario/listarTransportista.controller";
const router = Router();

router.get(
  "/getCargaTransportista/:id_transportista",
  TarifaraTransportistaController.listTarifaTransportistaCarga,
);

export default router;
