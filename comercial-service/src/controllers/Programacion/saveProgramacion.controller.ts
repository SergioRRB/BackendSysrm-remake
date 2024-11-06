// src/controllers/ProgramacionController.ts
import { Request, Response } from "express";
import { CreateProgramacionDto } from "../../dtos/Programacion/saveProgramacion.dto";
import { validate } from "class-validator";
import { ProgramacionService } from "../../services/Programacion/saveProgramacion.service";

const programacionService = new ProgramacionService();

export class ProgramacionController {
  async guardarProgramacion(req: Request, res: Response) {
    const data = Object.assign(new CreateProgramacionDto(), req.body);
    const errors = await validate(data);

    if (errors.length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "Datos no válidos", errors });
    }

    try {
      const programacion = await programacionService.saveProgramacion(data);
      return res.status(201).json({
        success: true,
        message: "Programado Correctamente",
        data: programacion,
      });
    } catch (error: any) {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
}
