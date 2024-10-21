// validate for transportistas tarifarios
import { Request, Response, NextFunction } from "express";
import { TransportistaCargaDto } from "../../dtos/importarTarifarioDto/importarTransportista.dto";
import { TransportistaCourrierDto } from "../../dtos/importarTarifarioDto/importarTransportista.dto";

export function validateTransportistaCarga(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const data_TransportistasCargas: TransportistaCargaDto[] =
    req.body.dataTransportistas;

  // Validaciones básicas
  for (const element of data_TransportistasCargas) {
    if (
      !element.ubigeo_tarifario_transportista_carga ||
      !element.kg_maximo_tarifario_transportista_carga ||
      !element.kg_base_adicional_tarifario_transportista_carga ||
      !element.paquete_tarifario_transportista_carga ||
      !element.tmin_tarifario_transportista_carga ||
      !element.tmax_tarifario_transportista_carga
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  next();
}

export function validateTransportistaCourrier(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const data_TransportistasCourriers: TransportistaCourrierDto[] =
    req.body.dataTransportistas;

  // Validaciones básicas
  for (const element of data_TransportistasCourriers) {
    if (
      !element.ubigeo_tarifario_transportista_courrier ||
      !element.kg_tarifario_transportista_courrier ||
      !element.kg_adicional_tarifario_transportista_courrier ||
      !element.tmin_tarifario_transportista_courrier ||
      !element.tmax_tarifario_transportista_courrier
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  next();
}
