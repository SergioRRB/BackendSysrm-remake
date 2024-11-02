import { Request, Response } from "express";
import { AprobarValidacionesService } from "../../services/Validacion/AprobarValidacion.service";
import { AprobarValidacionDto } from "../../dtos/Validation.dto";

class AprobarValidacionesController {
  private aprobarValidacionesService: AprobarValidacionesService;

  constructor() {
    this.aprobarValidacionesService = new AprobarValidacionesService();
  }

  public async aprobarValidacion(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const data: AprobarValidacionDto = req.body;

    try {
      const response =
        await this.aprobarValidacionesService.aprobarValidacion(data);
      return res.status(response.success ? 200 : 400).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, mensaje: "Error en el servidor" });
    }
  }
}

export const aprobarValidacionesController =
  new AprobarValidacionesController();
