import { Request, Response } from "express";
import { ObtenerAsignacionRecojoService } from "../../services/AsignacionRecojo/obtenerAsignacionRecojo.service";

export class ObtenerAsignacionRecojoController {
  private obtenerAsignacionRecojoService: ObtenerAsignacionRecojoService;

  constructor() {
    this.obtenerAsignacionRecojoService = new ObtenerAsignacionRecojoService();
  }

  public async obtenerAsignaciones(req: Request, res: Response) {
    try {
      const asignaciones =
        await this.obtenerAsignacionRecojoService.obtenerAsignaciones();

      return res.json({
        success: true,
        data: asignaciones,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}
