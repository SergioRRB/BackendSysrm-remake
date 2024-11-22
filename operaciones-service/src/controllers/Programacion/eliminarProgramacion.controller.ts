import { Request, Response } from "express";
import { GuardarProgramacionService } from "../../services/Programacion/saveProgramacion.service";
import { CreateProgramacionDto } from "../../dtos/Programacion/saveProgramacion.dto";

// Instancia del servicio para guardar programaciones
const guardarProgramacionService = new GuardarProgramacionService();

/**
 * Controlador `GuardarProgramacionController`
 * Maneja las solicitudes relacionadas con la creación de una programación.
 */
export class GuardarProgramacionController {
  /**
   * Método estático `guardarProgramacion`
   * Crea una nueva programación basada en los datos proporcionados en la solicitud.
   *
   * @param {Request} req - Objeto de solicitud de Express que contiene los datos de la programación en el cuerpo.
   * @param {Response} res - Objeto de respuesta de Express que devuelve el resultado de la operación.
   * @returns {Promise<void>} Devuelve una respuesta con el estado de la operación.
   */
  static async guardarProgramacion(req: Request, res: Response) {
    // Extrae los datos de la solicitud y los asigna al DTO correspondiente
    const data: CreateProgramacionDto = req.body;

    // Validación básica de datos (amplía las reglas de validación según los requisitos)
    if (
      !data.id_orden_servicio ||
      !data.id_cliente_programacion ||
      !data.area_programacion
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Campos obligatorios faltantes" });
    }

    try {
      // Llama al servicio para guardar la programación
      const result = await guardarProgramacionService.saveProgramacion(data);

      // Devuelve la respuesta exitosa con los datos del resultado
      res.status(200).json(result);
    } catch (error) {
      // Manejo de errores y devolución de una respuesta con un estado de error
      res.status(500).json({
        success: false,
        message: "Error al guardar programación",
        error,
      });
    }
  }
}
