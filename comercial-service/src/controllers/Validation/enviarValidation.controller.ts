import { Request, Response } from "express";
import { EnviarValidacionService } from "../../services/Validacion/EnviarValidacion.service";
import { EnviarValidacionDto } from "../../dtos/Validation.dto";

const enviarValidacionService = new EnviarValidacionService();

export const enviarValidacionController = async (
  req: Request,
  res: Response,
) => {
  const data: EnviarValidacionDto = req.body;

  try {
    const result = await enviarValidacionService.enviarValidacion(data);
    return res.status(result.success ? 200 : 400).json(result);
  } catch (error: any) {
    // Type assertion to 'any'
    return res.status(500).json({ success: false, mensaje: error.message });
  }
};
