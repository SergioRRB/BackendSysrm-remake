import { Router } from "express";
import {
  ExportarTarifarioTransportistaCargaController,
  ExportarTarifarioTransportistaCourrierController,
} from "../../controllers/exportarTarifario/exportarTransportista.controller";
const router = Router();

// Ruta para exportar tarifario agente aéreo
router.get(
  "/exportarTransportistaCarga/:id_transportista",
  ExportarTarifarioTransportistaCargaController.exportarTransportistaCarga,
);

router.get(
  "/exportarTransportistaCourrier/:id_transportista",
  ExportarTarifarioTransportistaCourrierController.exportarTransportistaCarga,
);

export default router;
