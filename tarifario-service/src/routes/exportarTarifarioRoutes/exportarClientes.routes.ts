import { Router } from "express";
import { validateDtoCliente } from "../../middlewares/validate";
import { ExportarClienteDto } from "../../dtos/exportarTarifarioDto/exportarCliente.dto";
import {
  exportarTarifaClienteAereo,
  exportarTarifaClienteCarga,
  exportarTarifaClienteCourrier,
  exportarTarifaClienteValorizado,
} from "../../controllers/exportarTarifario/exportarCliente.controller";

const router = Router();

router.get(
  "/exportarClienteCarga/:id_cliente/:id_area",
  validateDtoCliente(ExportarClienteDto),
  exportarTarifaClienteCarga,
);

router.get(
  "/exportarClienteValorizado/:id_cliente/:id_area",
  validateDtoCliente(ExportarClienteDto),
  exportarTarifaClienteValorizado,
);

router.get(
  "/exportarClienteAereo/:id_cliente/:id_area",
  validateDtoCliente(ExportarClienteDto),
  exportarTarifaClienteAereo,
);

router.get(
  "/exportarClienteCourrier/:id_cliente/:id_area",
  validateDtoCliente(ExportarClienteDto),
  exportarTarifaClienteCourrier,
);

export default router;
