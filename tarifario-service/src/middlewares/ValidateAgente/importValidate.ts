import { Request, Response, NextFunction } from 'express';
import { AgenteAereoDto } from "../../dtos/importarTarifarioDto/importarAgente.dto";
import { AgenteCourrierDto } from '../../dtos/importarTarifarioDto/importarAgente.dto';

/**
 * Middleware para validar los datos de entrada de los agentes aéreos.
 * Este middleware se encarga de verificar que cada objeto en el cuerpo
 * de la solicitud contenga todos los campos requeridos para el agente aéreo.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los datos enviados por el cliente.
 * @param {Response} res - El objeto de respuesta de Express que se utilizará para enviar una respuesta al cliente.
 * @param {NextFunction} next - Función que se llama para pasar el control al siguiente middleware o ruta en la cadena de procesamiento.
 * @throws {Error} Si alguno de los campos requeridos está ausente, devuelve una respuesta con un código de estado 400 y un mensaje de error.
 * @returns {void} Llama a la función next() si todos los campos son válidos y están presentes.
 */
export function validateAgenteAereo(req: Request, res: Response, next: NextFunction) {
  const data_AgenteAereo: AgenteAereoDto[] = req.body;

  // Itera sobre cada elemento en el array de datos de agente aéreo
  for (const element of data_AgenteAereo) {
    // Verifica que los campos requeridos no estén vacíos o indefinidos
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

  // Si todos los datos son válidos, pasa al siguiente middleware
  next();
}

/**
 * Middleware para validar los datos de entrada de los agentes courriers.
 * Este middleware se encarga de verificar que cada objeto en el cuerpo
 * de la solicitud contenga todos los campos requeridos para el agente courrier.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los datos enviados por el cliente.
 * @param {Response} res - El objeto de respuesta de Express que se utilizará para enviar una respuesta al cliente.
 * @param {NextFunction} next - Función que se llama para pasar el control al siguiente middleware o ruta en la cadena de procesamiento.
 * @throws {Error} Si alguno de los campos requeridos está ausente, devuelve una respuesta con un código de estado 400 y un mensaje de error.
 * @returns {void} Llama a la función next() si todos los campos son válidos y están presentes.
 */
export function validateAgenteCourrier(req: Request, res: Response, next: NextFunction) {
  const data_AgenteCourrier: AgenteCourrierDto[] = req.body;

  // Itera sobre cada elemento en el array de datos de agente courrier
  for (const element of data_AgenteCourrier) {
    // Verifica que los campos requeridos no estén vacíos o indefinidos
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

  // Si todos los datos son válidos, pasa al siguiente middleware
  next();
}
