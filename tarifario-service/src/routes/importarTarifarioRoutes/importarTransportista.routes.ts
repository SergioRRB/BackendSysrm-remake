import { Router } from "express";
import {
  validateTransportistaCarga,
  validateTransportistaCourrier,
} from "../../middlewares/ValidateTransportista/importValidate";
import {
  ImportarTransportistaCargaController,
  ImportarTransportistaCourrierController,
} from "../../controllers/importarTarifario/importarTransportista.controller";

const router = Router();
const importarTransportistaCargaController =
  new ImportarTransportistaCargaController();
const importarTransportistaCourrierController =
  new ImportarTransportistaCourrierController();

router.post(
  "/upload/TransportistaCarga",
  validateTransportistaCarga,
  importarTransportistaCargaController.insertTarifarioTransportistaCarga,
);

router.post(
  "/upload/TransportistaCourrier",
  validateTransportistaCourrier,
  importarTransportistaCourrierController.insertTarifarioTransportistaCourrier,
);

export default router;
