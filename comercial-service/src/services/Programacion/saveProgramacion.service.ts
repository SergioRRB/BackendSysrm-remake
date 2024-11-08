import { PrismaClient } from "@prisma/client";
import { CreateProgramacionDto } from "../../dtos/Programacion/saveProgramacion.dto";

const prisma = new PrismaClient();

export class GuardarProgramacionService {
  async saveProgramacion(data: CreateProgramacionDto) {
    // Verificar si ya existe una programación para la orden de servicio
    const existeProgramacion = await prisma.programaciones.findUnique({
      where: { id_orden_servicio: data.id_orden_servicio },
    });

    if (existeProgramacion) {
      throw new Error("Error: ¡La orden de servicio ya está programada!");
    }

    // Validar el tipo de id_cliente_programacion
    if (data.id_cliente_programacion !== null) {
      const idClienteIsValid =
        typeof data.id_cliente_programacion === "string" ||
        typeof data.id_cliente_programacion === "number";
      if (!idClienteIsValid) {
        throw new Error(
          "id_cliente_programacion debe ser un número o una cadena",
        );
      }
    }

    // Crear la programación sin validar si el cliente existe
    const programacion = await prisma.programaciones.create({
      data: {
        id_orden_servicio: data.id_orden_servicio,
        id_cliente_programacion: data.id_cliente_programacion ?? null, // Si no hay cliente, lo dejamos como null
        area_programacion: data.area_programacion,
        ubigeo_programacion: data.ubigeo_programacion,
        direccion_programacion: data.direccion_programacion,
        referencias_programacion: data.referencias_programacion,
        contacto_programacion: data.contacto_programacion,
        telefono_programacion: data.telefono_programacion,
        correo_programacion: data.correo_programacion,
        descripcion_mercancia_programacion:
          data.descripcion_mercancia_programacion,
        cantidad_bultos_programacion: data.cantidad_bultos_programacion,
        peso_mercancia_programacion: data.peso_mercancia_programacion,
        peso_volumen_programacion: data.peso_volumen_programacion,
        metros_cubicos_programacion: data.metros_cubicos_programacion,
        fecha_programacion: new Date(data.fecha_programacion),
        hora_programacion: new Date(
          `${data.fecha_programacion}T${data.hora_programacion}:00`,
        ), // Concatenar fecha y hora
        id_creador_programacion: data.id_creador_programacion,
        fecha_creado: new Date(),
      },
    });

    return programacion;
  }
}
