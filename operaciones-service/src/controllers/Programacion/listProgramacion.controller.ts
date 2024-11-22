import { Request, Response } from "express";
import { ListarProgramacionService } from "../../services/Programacion/listarProgramaciones.service";

// Instancia del servicio para listar programaciones
const listarProgramacionService = new ListarProgramacionService();

/**
 * Controlador `ListarProgramacionController`
 * Se encarga de manejar las solicitudes para listar las programaciones.
 */
export class ListarProgramacionController {
  /**
   * Método `listarProgramaciones`
   * Obtiene todas las programaciones y las devuelve en la respuesta HTTP.
   *
   * @param {Request} req - Objeto de solicitud de Express.
   * @param {Response} res - Objeto de respuesta de Express.
   * @returns {Promise<void>} Devuelve una respuesta con las programaciones o un error en caso de falla.
   */
  async listarProgramaciones(req: Request, res: Response) {
    try {
      // Llama al servicio para obtener la lista de programaciones
      const programaciones =
        await listarProgramacionService.listarProgramaciones();

      // Devuelve las programaciones en la respuesta con un estado exitoso
      res.status(200).json({
        success: true,
        data: programaciones,
      });
    } catch (error: any) {
      // Manejo de errores y devolución de una respuesta con un estado de error
      res.status(500).json({
        success: false,
        message: "Error al obtener las programaciones",
        error: error.message,
      });
    }
  }
}
