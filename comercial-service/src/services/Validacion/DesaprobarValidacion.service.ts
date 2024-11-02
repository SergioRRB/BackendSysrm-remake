// src/services/Validacion/DesaprobarValidacion.service.ts
import { PrismaClient } from "@prisma/client";
import { DesaprobarValidacionDto } from "../../dtos/Validation.dto"; // Asegúrate de que este DTO esté definido correctamente.

const prisma = new PrismaClient();

export class DesaprobarValidacionesService {
  static async desaprobarValidacion(dto: DesaprobarValidacionDto) {
    const { id, id_usuario } = dto;

    // Realizar la consulta para verificar si existe la validación
    const validacion = await prisma.validaciones.findFirst({
      where: {
        id_orden_servicio_validacion: id, // Asegúrate de que 'id' es un string
        estado_validacion: "0", // Mantener como string
        id_accion_validacion: null,
      },
    });

    if (validacion) {
      const result = await prisma.validaciones.updateMany({
        where: {
          id_orden_servicio_validacion: id, // Mantener como string
        },
        data: {
          estado_validacion: "0", // Mantener como string
          id_accion_validacion: id_usuario, // Asumimos que id_usuario es un Int
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
        mensaje: "!Cotización desaprobada Correctamente!",
      };
    } else {
      return { success: false, mensaje: "!Está cotización ya se cambió" };
    }
  }
}
