import { Request, Response } from "express";
import { ObtenerAsignacionRecojoService } from "../../services/AsignacionRecojo/obtenerAsignacionRecojo.service";

/**
 * Controlador para manejar la obtención de asignaciones de recojo.
 */
export class ObtenerAsignacionRecojoController {
  private obtenerAsignacionRecojoService: ObtenerAsignacionRecojoService;

  /**
   * Constructor del controlador que inicializa el servicio.
   */
  constructor() {
    this.obtenerAsignacionRecojoService = new ObtenerAsignacionRecojoService();
  }

  /**
   * Método para manejar la solicitud HTTP de obtención de asignaciones.
   * @param req {Request} Objeto de solicitud HTTP.
   * @param res {Response} Objeto de respuesta HTTP.
   */
  public async obtenerAsignaciones(req: Request, res: Response) {
    try {
      // Llama al servicio para obtener las asignaciones
      const asignaciones =
        await this.obtenerAsignacionRecojoService.obtenerAsignaciones();

      // Devuelve las asignaciones como respuesta exitosa
      return res.json({
        success: true,
        data: asignaciones,
      });
    } catch (error: any) {
      // Maneja errores y devuelve una respuesta con el mensaje correspondiente
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}
