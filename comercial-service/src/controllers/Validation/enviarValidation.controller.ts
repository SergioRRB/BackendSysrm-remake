import { Request, Response } from "express";
import { EnviarValidacionService } from "../../services/Validacion/EnviarValidacion.service";
import { EnviarValidacionDto } from "../../dtos/Validation.dto";

const enviarValidacionService = new EnviarValidacionService();

/**
 * Controlador para enviar validaciones.
 * @module EnviarValidacionController
 */

/**
 * Envía una validación a través del servicio correspondiente.
 *
 * @function enviarValidacionController
 * @param {Request} req - Objeto de solicitud de Express que contiene los datos de la validación a enviar.
 * @param {Response} res - Objeto de respuesta de Express utilizado para enviar la respuesta al cliente.
 * @returns {Promise<Response>} Devuelve una respuesta JSON con el resultado de la operación.
 *
 * @throws {Error} Devuelve un error 500 si ocurre un problema en el servidor.
 */
export const enviarValidacionController = async (
  req: Request,
  res: Response,
) => {
  const data: EnviarValidacionDto = req.body;

  try {
    const result = await enviarValidacionService.enviarValidacion(data);
    return res.status(result.success ? 200 : 400).json(result);
  } catch (error: any) {
    // Type assertion to 'any'
    return res.status(500).json({ success: false, mensaje: error.message });
  }
};
