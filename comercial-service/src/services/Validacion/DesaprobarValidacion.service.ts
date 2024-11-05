import { PrismaClient } from "@prisma/client";
import { DesaprobarValidacionDto } from "../../dtos/Validation.dto"; // Asegúrate de que este DTO esté definido correctamente.

const prisma = new PrismaClient();

/**
 * Servicio para manejar la desaprobación de validaciones.
 */
export class DesaprobarValidacionesService {
  /**
   * Desaprueba una validación dada la información proporcionada.
   *
   * Este método verifica si la validación existe y está en estado "0". Si es así,
   * actualiza el estado de la validación a "0" y asigna el ID del usuario que la desaprueba.
   * Si la validación no existe o no se puede actualizar, devuelve un mensaje de error.
   *
   * @param {DesaprobarValidacionDto} dto - Datos necesarios para desaprobar la validación.
   * @returns {Promise<{ success: boolean; mensaje: string }>} - Resultado de la operación.
   */
  static async desaprobarValidacion(dto: DesaprobarValidacionDto) {
    const { id, id_usuario } = dto;

    // Realiza la consulta para verificar si existe la validación
    const validacion = await prisma.validaciones.findFirst({
      where: {
        id_orden_servicio_validacion: id,
        estado_validacion: "0",
        id_accion_validacion: null,
      },
    });

    if (validacion) {
      // Actualiza el estado de la validación a "0"
      const result = await prisma.validaciones.updateMany({
        where: {
          id_orden_servicio_validacion: id,
        },
        data: {
          estado_validacion: "0",
          id_accion_validacion: id_usuario,
        },
      });

      if (result.count === 0) {
        return {
          success: false,
          mensaje: "No se pudo actualizar la validación",
        };
      }

      return {
        success: true,
        mensaje: "!Cotización desaprobada correctamente!",
      };
    } else {
      return { success: false, mensaje: "!Esta cotización ya se cambió" };
    }
  }
}
