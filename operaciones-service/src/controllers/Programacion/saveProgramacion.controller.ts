import { Request, Response } from "express";
import { GuardarProgramacionService } from "../../services/Programacion/saveProgramacion.service";
import { CreateProgramacionDto } from "../../dtos/Programacion/saveProgramacion.dto";

const guardarProgramacionService = new GuardarProgramacionService();

export class GuardarProgramacionController {
  static async guardarProgramacion(req: Request, res: Response) {
    const data: CreateProgramacionDto = req.body;

    // Validación básica de datos (puedes expandir según sea necesario)
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
      const result = await guardarProgramacionService.saveProgramacion(data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error al guardar programación",
        error,
      });
    }
  }
}
