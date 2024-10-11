import { Router } from "express";
import {
  listTarifaClienteAereo,
  listTarifaClienteCarga,
  listTarifaClienteCourrier,
  listTarifaClienteValorizado,
} from "../../controllers/listarTarifario/listarCliente.controller";

const router = Router();

router.get("/getAereoCliente/:id_cliente/:id_area", listTarifaClienteAereo);
router.get("/getCargaCliente/:id_cliente/:id_area", listTarifaClienteCarga); // Nueva ruta para cargas
router.get(
  "/getCourierCliente/:id_cliente/:id_area",
  listTarifaClienteCourrier,
);
router.get(
  "/getValorizadoCliente/:id_cliente/:id_area",
  listTarifaClienteValorizado,
);

export default router;
