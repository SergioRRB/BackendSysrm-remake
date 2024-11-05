import { Request, Response } from "express";
import { AprobarValidacionesService } from "../../services/Validacion/AprobarValidacion.service";
import { AprobarValidacionDto } from "../../dtos/Validation.dto";

/**
 * Controlador para manejar las aprobaciones de validaciones.
 * Este controlador expone métodos para gestionar las solicitudes
 * relacionadas con la aprobación de validaciones en el sistema.
 */
export class AprobarValidacionesController {
  // Instancia estática del servicio para manejar la lógica de aprobación de validaciones
  private static aprobarValidacionesService = new AprobarValidacionesService();

  /**
   * Método para aprobar una validación.
   *
   * Este método recibe una solicitud con datos necesarios para aprobar
   * una validación y devuelve una respuesta JSON con el resultado de la operación.
   *
   * @param {Request} req - La solicitud que contiene los datos de aprobación.
   * @param {Response} res - La respuesta que se enviará al cliente.
   * @returns {Promise<Response>} - Retorna una promesa que se resuelve
   * en una respuesta HTTP con el resultado de la operación.
   */
  public static async aprobarValidacion(
    req: Request,
    res: Response,
  ): Promise<Response> {
    // Obtiene los datos de la solicitud
    const data: AprobarValidacionDto = req.body;

    try {
      // Llama al servicio para aprobar la validación con los datos proporcionados
      const response =
        await this.aprobarValidacionesService.aprobarValidacion(data);
      // Retorna una respuesta con el estado y el mensaje adecuado
      return res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
      // Maneja errores, registrando el error y enviando una respuesta de error al cliente
      console.error(error);
      return res
        .status(500)
        .json({ success: false, mensaje: "Error en el servidor" });
    }
  }
}
