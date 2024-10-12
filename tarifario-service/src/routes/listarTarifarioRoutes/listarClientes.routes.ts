import { Router } from "express";
import {
  listTarifaClienteAereo,
  listTarifaClienteCarga,
  listTarifaClienteCourrier,
  listTarifaClienteValorizado,
} from "../../controllers/listarTarifario/listarCliente.controller";
import { validateDto } from "../../middlewares/validate";
import { ListarClienteDto } from "../../dtos/listarTarifarioDto/listarCliente.dto";

const router = Router();

router.get(
  "/getAereoCliente/:id_cliente/:id_area",
  validateDto(ListarClienteDto),
  listTarifaClienteAereo,
);

router.get(
  "/getCargaCliente/:id_cliente/:id_area",
  validateDto(ListarClienteDto),
  listTarifaClienteCarga,
);

router.get(
  "/getCourrierCliente/:id_cliente/:id_area",
  validateDto(ListarClienteDto),
  listTarifaClienteCourrier,
);
router.get(
  "/getValorizadoCliente/:id_cliente/:id_area",
  validateDto(ListarClienteDto),
  listTarifaClienteValorizado,
);

export default router;
