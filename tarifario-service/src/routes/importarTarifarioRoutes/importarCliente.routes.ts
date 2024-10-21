import { Router } from "express";
import {
  validateClienteAereo,
  validateClienteCarga,
  validateClienteCourrier,
  validateClienteValorizado,
} from "../../middlewares/ValidateCliente/importValidate";
import {} from "../../middlewares/ValidateCliente/importValidate";
import {
  ImportarClienteAereoController,
  ImportarClienteCargaController,
  ImportarClienteCourrierController,
  ImportarClienteValorizadoController,
} from "../../controllers/importarTarifario/importarCliente.controller";

const router = Router();
const importartClienteAereoController = new ImportarClienteAereoController();
const importarClienteCargaController = new ImportarClienteCargaController();
const importarClienteCourrierController =
  new ImportarClienteCourrierController();
const importarClienteValorizadoController =
  new ImportarClienteValorizadoController();

router.post(
  "/upload/ClienteAereo",
  validateClienteAereo,
  importartClienteAereoController.insertTarifarioClienteAereo,
);
router.post(
  "/upload/ClienteCarga",
  validateClienteCarga,
  importarClienteCargaController.insertTarifarioClienteCarga,
);
router.post(
  "/upload/ClienteCourrier",
  validateClienteCourrier,
  importarClienteCourrierController.insertTarifarioClienteCourrier,
);

router.post(
  "/upload/ClienteValorizado",
  validateClienteValorizado,
  importarClienteValorizadoController.insertTarifarioClienteValorizado,
);

export default router;
