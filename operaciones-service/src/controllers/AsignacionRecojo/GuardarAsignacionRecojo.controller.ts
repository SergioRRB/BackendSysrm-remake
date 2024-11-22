import { Request, Response } from "express";
import { GuardarAsignacionRecojoService } from "../../services/AsignacionRecojo/saveAsignacionRecojo.service";

const guardarAsignacionRecojoService = new GuardarAsignacionRecojoService();

/**
 * Controlador para manejar las solicitudes de guardar asignaciones de recojo.
 */
export class GuardarAsignacionRecojoController {
  /**
   * Método para guardar o actualizar una asignación de recojo.
   * @param req - Objeto de solicitud HTTP (Express).
   * @param res - Objeto de respuesta HTTP (Express).
   */
  async guardarAsignacion(req: Request, res: Response) {
    try {
      // Llama al servicio para procesar la lógica de negocio con los datos recibidos.
      const result = await guardarAsignacionRecojoService.guardarAsignacion(
        req.body,
      );
      res.json(result); // Responde con el resultado exitoso.
    } catch (error: any) {
      // Responde con un error en caso de fallo.
      res.status(400).json({ success: false, message: error.message });
    }
  }
}
