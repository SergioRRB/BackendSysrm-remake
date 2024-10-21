import { Request, Response, NextFunction } from 'express';
import { AgenteAereoDto } from "../../dtos/importarTarifarioDto/importarAgente.dto";
import { AgenteCourrierDto } from '../../dtos/importarTarifarioDto/importarAgente.dto';

export function validateAgenteAereo(req: Request, res: Response, next: NextFunction) {
  const data_AgenteAereo: AgenteAereoDto[] = req.body;

  // Validaciones básicas
  for (const element of data_AgenteAereo) {
    if (
      !element.kg_tarifario_agente_aereo ||
      !element.kg_adicional_tarifario_agente_aereo ||
      !element.tmin_tarifario_agente_aereo ||
      !element.tmax_tarifario_agente_aereo ||
      !element.ubigeo_tarifario_agente_aereo
    ) {
      return res.status(400).json({ message: 'Datos incompletos o inválidos' });
    }
  }

  next();
}

export function validateAgenteCourrier(req: Request, res: Response, next: NextFunction) {
  const data_AgenteCourrier: AgenteCourrierDto[] = req.body;

  // Validaciones básicas
  for (const element of data_AgenteCourrier) {
    if (
      !element.kg_tarifario_agente_courrier ||
      !element.kg_adicional_tarifario_agente_courrier ||
      !element.tmin_tarifario_agente_courrier ||
      !element.tmax_tarifario_agente_courrier ||
      !element.ubigeo_tarifario_agente_courrier
    ) {
      return res.status(400).json({ message: 'Datos incompletos o inválidos' });
    }
  }

  next();
}