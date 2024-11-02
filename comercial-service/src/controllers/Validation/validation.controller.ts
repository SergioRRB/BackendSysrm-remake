import { Request, Response } from "express";
import { ValidacionesService } from "../../services/Validacion/Validacion.service";

/**
 * Controlador para gestionar las validaciones.
 */
export const ValidacionesController = {
  /**
   * Lista las validaciones y sus detalles.
   *
   * @param {Request} req - El objeto de solicitud de Express.
   * @param {Response} res - El objeto de respuesta de Express.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     con los detalles de las validaciones o un mensaje de error.
   */
  async listarValidaciones(req: Request, res: Response) {
    try {
      const detallesValidaciones =
        await ValidacionesService.obtenerDetallesValidaciones();
      return res.json(detallesValidaciones);
    } catch (error) {
      console.error("Error al obtener las validaciones:", error); // Esto mostrará el error específico
      return res
        .status(500)
        .json({ error: "Error interno del servidor", detalle: error });
    }
  },
};
