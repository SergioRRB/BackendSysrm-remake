import { Request, Response } from "express";
import { eliminarProgramacion } from "../../services/Programacion/eliminarProgramacion.service";

/**
 * Controlador `eliminarProgramacionController`
 * Maneja las solicitudes para eliminar una programación específica.
 *
 * @param {Request} req - Objeto de solicitud de Express, contiene el ID de la programación en los parámetros.
 * @param {Response} res - Objeto de respuesta de Express utilizado para enviar la respuesta al cliente.
 * @returns {Promise<Response>} Respuesta HTTP con el resultado de la operación.
 */
export async function eliminarProgramacionController(
  req: Request,
  res: Response,
) {
  // Extraer y convertir el ID de programación desde los parámetros de la solicitud
  const id = parseInt(req.params.id);

  // Validar que el ID proporcionado es un número válido
  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: "ID inválido" });
  }

  // Llamar al servicio para eliminar la programación
  const result = await eliminarProgramacion(id);

  // Devolver una respuesta exitosa si la eliminación fue correcta
  if (result.success) {
    return res.status(200).json(result);
  }
  // Devolver una respuesta de error si ocurrió algún problema
  else {
    return res.status(400).json(result);
  }
}
