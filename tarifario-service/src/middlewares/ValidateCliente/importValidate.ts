import { Request, Response, NextFunction } from "express";
import { ClienteAereoDto } from "../../dtos/importarTarifarioDto/importarCliente.dto";
import { ClienteCargaDto } from "../../dtos/importarTarifarioDto/importarCliente.dto";
import { ClienteCourrierDto } from "../../dtos/importarTarifarioDto/importarCliente.dto";
import { ClienteValorizadoDto } from "../../dtos/importarTarifarioDto/importarCliente.dto";

export function validateClienteAereo(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const data_ClientesAereos: ClienteAereoDto[] = req.body;

  // Validaciones básicas
  for (const element of data_ClientesAereos) {
    if (
      !element.kg_tarifario_cliente_aereo ||
      !element.kg_adicional_tarifario_cliente_aereo ||
      !element.tmin_tarifario_cliente_aereo ||
      !element.tmax_tarifario_cliente_aereo ||
      !element.ubigeo_tarifario_cliente_aereo
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  next();
}

export function validateClienteCarga(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const data_ClientesCargas: ClienteCargaDto[] = req.body.dataClientes;

  for (const element of data_ClientesCargas) {
    if (
      !element.kg_maximo_tarifario_cliente_carga ||
      !element.kg_base_adicional_tarifario_cliente_carga ||
      !element.paquete_tarifario_cliente_carga ||
      !element.tmin_tarifario_cliente_carga ||
      !element.tmax_tarifario_cliente_carga ||
      !element.ubigeo_tarifario_cliente_carga
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  next();
}

export function validateClienteCourrier(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const data_ClientesCourriers: ClienteCourrierDto[] = req.body;

  // Validaciones básicas
  for (const element of data_ClientesCourriers) {
    if (
      !element.kg_tarifario_cliente_courrier ||
      !element.kg_adicional_tarifario_cliente_courrier ||
      !element.tmin_tarifario_cliente_courrier ||
      !element.tmax_tarifario_cliente_courrier ||
      !element.ubigeo_tarifario_cliente_courrier
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  next();
}

export function validateClienteValorizado(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const data_ClientesValorizados: ClienteValorizadoDto[] = req.body;

  // Validaciones básicas
  for (const element of data_ClientesValorizados) {
    if (
      !element.ubigeo_tarifario_cliente_valorizado ||
      !element.producto_tarifario_cliente_valorizado ||
      !element.costo_producto_tarifario_cliente_valorizado ||
      !element.tmin_tarifario_cliente_valorizado ||
      !element.tmax_tarifario_cliente_valorizado
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  next();
}
