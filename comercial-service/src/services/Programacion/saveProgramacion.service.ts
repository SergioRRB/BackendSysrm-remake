// src/services/ProgramacionService.ts
import { PrismaClient } from "@prisma/client";
import { CreateProgramacionDto } from "../../dtos/Programacion/saveProgramacion.dto";

const prisma = new PrismaClient();

export class ProgramacionService {
  async saveProgramacion(data: CreateProgramacionDto) {
    const existeProgramacion = await prisma.programaciones.findUnique({
      where: { id_orden_servicio: data.id_orden_servicio },
    });

    if (existeProgramacion) {
      throw new Error("Error: ¡La orden de servicio ya está programada!");
    }

    const programacion = await prisma.programaciones.create({
      data: {
        id_orden_servicio: data.id_orden_servicio,
        id_cliente_programacion: data.id_cliente,
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
        hora_programacion: data.hora_programacion,
        id_creador_programacion: data.id_creador,
        fecha_creado: new Date(),
      },
    });

    return programacion;
  }
}
