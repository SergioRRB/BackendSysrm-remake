import { Request, Response } from "express";
import { DesaprobarValidacionesService } from "../../services/Validacion/DesaprobarValidacion.service";
import { DesaprobarValidacionDto } from "../../dtos/Validation.dto";

/**
 * Controlador para gestionar las validaciones.
 */
export const DesaprobarValidacionesController = {
  async desaprobar(req: Request, res: Response) {
    const dto: DesaprobarValidacionDto = {
      id: req.params.id.toString(), // Convierte el id a string
      id_usuario: req.body.id_usuario,
    };

    try {
      const resultado =
        await DesaprobarValidacionesService.desaprobarValidacion(dto);
      return res.status(resultado.success ? 200 : 400).json(resultado);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, mensaje: "Error del servidor" });
    }
  },
};
