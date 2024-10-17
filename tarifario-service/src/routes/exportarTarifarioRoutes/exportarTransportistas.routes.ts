import { Router } from "express";
import { ExportarTarifarioTransportistaCargaController } from "../../controllers/exportarTarifario/exportarTransportista.controller";
const router = Router();

// Ruta para exportar tarifario agente aéreo
router.get(
  "/exportarTransportistaCarga/:id_transportista",
  ExportarTarifarioTransportistaCargaController.exportarTransportistaCarga,
);

export default router;
