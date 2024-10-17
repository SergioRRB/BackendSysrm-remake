// src/routes/tarifarioTransportistaCarga.routes.ts

import { Router } from "express";
import { TarifaraTransportistaController } from "../../controllers/listarTarifario/listarTransportista.controller";
const router = Router();

router.get(
  "/getCargaTransportista/:id_transportista",
  TarifaraTransportistaController.listTarifaTransportistaCarga,
);

router.get(
  "/getCourrierTransportista/:id_transportista",
  TarifaraTransportistaController.listTarifaTransportistaCourrier,
);

export default router;
