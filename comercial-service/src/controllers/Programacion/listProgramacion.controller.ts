import { Request, Response } from "express";
import { ListarProgramacionService } from "../../services/Programacion/listarProgramaciones.service";

const listarProgramacionService = new ListarProgramacionService();

export class ListarProgramacionController {
  async listarProgramaciones(req: Request, res: Response) {
    try {
      const programaciones =
        await listarProgramacionService.listarProgramaciones();
      res.status(200).json({
        success: true,
        data: programaciones,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error al obtener las programaciones",
        error: error.message,
      });
    }
  }
}
