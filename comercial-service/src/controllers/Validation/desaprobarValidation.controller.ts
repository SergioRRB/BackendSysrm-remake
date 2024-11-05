import { Request, Response } from "express";
import { DesaprobarValidacionesService } from "../../services/Validacion/DesaprobarValidacion.service";
import { DesaprobarValidacionDto } from "../../dtos/Validation.dto";

/**
 * Controlador para gestionar las validaciones.
 * @module DesaprobarValidacionesController
 */
export const DesaprobarValidacionesController = {
  /**
   * Desaprueba una validación específica.
   *
   * @function desaprobar
   * @param {Request} req - Objeto de solicitud de Express que contiene los parámetros y el cuerpo de la solicitud.
   * @param {Response} res - Objeto de respuesta de Express utilizado para enviar la respuesta al cliente.
   * @returns {Promise<Response>} Devuelve una respuesta JSON con el resultado de la operación.
   *
   * @throws {Error} Devuelve un error 500 si ocurre un problema en el servidor.
   */
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
