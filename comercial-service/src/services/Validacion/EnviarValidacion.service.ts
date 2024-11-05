import { PrismaClient } from "@prisma/client";
import { EnviarValidacionDto } from "../../dtos/Validation.dto";

const prisma = new PrismaClient();

/**
 * Servicio para manejar el envío de validaciones.
 */
export class EnviarValidacionService {
  /**
   * Envía una validación para una cotización específica.
   *
   * Este método realiza las siguientes acciones:
   * 1. Verifica si ya existe una validación activa para la cotización dada.
   * 2. Si la validación ya existe, devuelve un mensaje indicando que no se puede enviar de nuevo.
   * 3. Si no existe, crea un nuevo registro de validación en la base de datos.
   * 4. Actualiza la cotización asociada para marcarla como validada.
   *
   * @param {EnviarValidacionDto} data - Datos necesarios para enviar la validación, incluyendo el ID de la cotización y el ID del creador de la validación.
   * @returns {Promise<{ success: boolean; mensaje: string }>} - Retorna una promesa que resuelve en un objeto que indica el resultado de la operación, incluyendo un mensaje de éxito o error.
   */
  async enviarValidacion(data: EnviarValidacionDto) {
    const { id, id_creador } = data; // `id` debe ser un string
    const fechaActual = new Date();

    try {
      // Verifica si ya existe una validación para la cotización dada
      const validacionExistente = await prisma.validaciones.findFirst({
        where: {
          id_orden_servicio_validacion: id.toString(),
          estado: "1",
        },
      });

      if (validacionExistente) {
        return {
          success: false,
          mensaje:
            "¡La Cotización ya fue enviada, No se puede enviar otra vez!",
        };
      } else {
        // Crea un nuevo registro de validación
        await prisma.validaciones.create({
          data: {
            id_orden_servicio_validacion: id.toString(),
            id_creador_enviar_validacion: id_creador,
            fecha_creado: fechaActual,
            estado: "1",
          },
        });

        // Actualiza la cotización asociada
        await prisma.cotizaciones.updateMany({
          where: {
            id_cotizacion: id.toString(), // Este debe ser un string
            estado: "1",
          },
          data: {
            validacion_cotizacion: "1",
          },
        });

        return {
          success: true,
          mensaje: "Cotización enviada Correctamente!",
        };
      }
    } catch (error) {
      console.error("Error en enviarValidacion:", error);
      return {
        success: false,
        mensaje: "Ocurrió un error al enviar la cotización.",
      };
    }
  }
}
