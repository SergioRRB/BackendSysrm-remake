import { Request, Response } from "express";
import { ExportarValidationService } from "../../services/Validacion/ExportarValidacion.service";

/**
 * Controlador para gestionar la exportación de validaciones.
 * @module ExportarValidacionesController
 */
export class ExportarValidacionesController {
  private exportarValidacionesService: ExportarValidationService;

  constructor() {
    this.exportarValidacionesService = new ExportarValidationService();
  }

  /**
   * Exporta las validaciones y devuelve los datos en formato JSON.
   *
   * @async
   * @function exportarValidaciones
   * @param {Request} req - Objeto de solicitud de Express.
   * @param {Response} res - Objeto de respuesta de Express.
   * @returns {Promise<Response>} Devuelve una respuesta JSON con los datos exportados o un mensaje de error.
   *
   * @throws {Error} Devuelve un error 500 si ocurre un problema en el servidor.
   */
  public async exportarValidaciones(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const data =
        await this.exportarValidacionesService.exportarValidaciones();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({
        success: false,
        mensaje: `Error en el servidor: ${(error as Error).message}`,
      });
    }
  }
}
