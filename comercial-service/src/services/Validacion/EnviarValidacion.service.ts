import { PrismaClient } from "@prisma/client";
import { EnviarValidacionDto } from "../../dtos/Validation.dto";

const prisma = new PrismaClient();

export class EnviarValidacionService {
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
