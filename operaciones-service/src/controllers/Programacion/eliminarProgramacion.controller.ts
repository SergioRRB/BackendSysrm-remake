import { Request, Response } from "express";
import { eliminarProgramacion } from "../../services/Programacion/eliminarProgramacion.service";

export async function eliminarProgramacionController(
  req: Request,
  res: Response,
) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: "ID inválido" });
  }

  const result = await eliminarProgramacion(id);

  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(400).json(result);
  }
}
