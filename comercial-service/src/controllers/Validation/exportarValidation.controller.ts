import { Request, Response } from "express";
import { ExportarValidationService } from "../../services/Validacion/ExportarValidacion.service";

export class ExportarValidacionesController {
  private exportarValidacionesService: ExportarValidationService;

  constructor() {
    this.exportarValidacionesService = new ExportarValidationService();
  }

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
