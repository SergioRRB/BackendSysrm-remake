import { Request, Response, NextFunction } from "express";
import { TransportistaCargaDto } from "../../dtos/importarTarifarioDto/importarTransportista.dto";
import { TransportistaCourrierDto } from "../../dtos/importarTarifarioDto/importarTransportista.dto";

/**
 * Middleware para validar los datos de entrada de los transportistas de carga.
 * Revisa que cada objeto en el cuerpo de la solicitud contenga los campos requeridos.
 *
 * @param {Request} req - El objeto de solicitud de Express, que contiene los datos del transportista de carga.
 * @param {Response} res - El objeto de respuesta de Express, que se utiliza para enviar respuestas al cliente.
 * @param {NextFunction} next - Función que se llama para pasar al siguiente middleware.
 * @returns {void} - Llama a la función next() si la validación es exitosa; de lo contrario, envía una respuesta de error.
 */
export function validateTransportistaCarga(req: Request, res: Response, next: NextFunction) {
  // Se extraen los datos de transportistas de carga del cuerpo de la solicitud.
  const data_TransportistasCargas: TransportistaCargaDto[] = req.body.dataTransportistas;

  // Itera sobre cada elemento en el array de transportistas de carga.
  for (const element of data_TransportistasCargas) {
    // Verifica si alguno de los campos requeridos está vacío o no existe.
    if (
      !element.ubigeo_tarifario_transportista_carga ||
      !element.kg_maximo_tarifario_transportista_carga ||
      !element.kg_base_adicional_tarifario_transportista_carga ||
      !element.paquete_tarifario_transportista_carga ||
      !element.tmin_tarifario_transportista_carga ||
      !element.tmax_tarifario_transportista_carga
    ) {
      // Si falta algún campo, responde con un error 400 y un mensaje apropiado.
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  // Si todas las validaciones son correctas, llama a next() para pasar al siguiente middleware.
  next();
}

/**
 * Middleware para validar los datos de entrada de los transportistas courriers.
 * Revisa que cada objeto en el cuerpo de la solicitud contenga los campos requeridos.
 *
 * @param {Request} req - El objeto de solicitud de Express, que contiene los datos del transportista courrier.
 * @param {Response} res - El objeto de respuesta de Express, que se utiliza para enviar respuestas al cliente.
 * @param {NextFunction} next - Función que se llama para pasar al siguiente middleware.
 * @returns {void} - Llama a la función next() si la validación es exitosa; de lo contrario, envía una respuesta de error.
 */
export function validateTransportistaCourrier(req: Request, res: Response, next: NextFunction) {
  // Se extraen los datos de transportistas courriers del cuerpo de la solicitud.
  const data_TransportistasCourriers: TransportistaCourrierDto[] = req.body.dataTransportistas;

  // Itera sobre cada elemento en el array de transportistas courriers.
  for (const element of data_TransportistasCourriers) {
    // Verifica si alguno de los campos requeridos está vacío o no existe.
    if (
      !element.ubigeo_tarifario_transportista_courrier ||
      !element.kg_tarifario_transportista_courrier ||
      !element.kg_adicional_tarifario_transportista_courrier ||
      !element.tmin_tarifario_transportista_courrier ||
      !element.tmax_tarifario_transportista_courrier
    ) {
      // Si falta algún campo, responde con un error 400 y un mensaje apropiado.
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  // Si todas las validaciones son correctas, llama a next() para pasar al siguiente middleware.
  next();
}
