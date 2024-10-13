import { Router } from "express";
import {
  listTarifaClienteAereo,
  listTarifaClienteCarga,
  listTarifaClienteCourrier,
  listTarifaClienteValorizado,
} from "../../controllers/listarTarifario/listarCliente.controller";
import { validateDtoCliente } from "../../middlewares/validate";
import { ListarClienteDto } from "../../dtos/listarTarifarioDto/listarCliente.dto";

const router = Router();

router.get(
  "/getAereoCliente/:id_cliente/:id_area",
  validateDtoCliente(ListarClienteDto),
  listTarifaClienteAereo,
);

router.get(
  "/getCargaCliente/:id_cliente/:id_area",
  validateDtoCliente(ListarClienteDto),
  listTarifaClienteCarga,
);

router.get(
  "/getCourrierCliente/:id_cliente/:id_area",
  validateDtoCliente(ListarClienteDto),
  listTarifaClienteCourrier,
);
router.get(
  "/getValorizadoCliente/:id_cliente/:id_area",
  validateDtoCliente(ListarClienteDto),
  listTarifaClienteValorizado,
);

export default router;
