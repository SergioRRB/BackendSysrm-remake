import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ListarProgramacionService {
  async listarProgramaciones() {
    const programacion = await prisma.programaciones.findMany({
      include: {
        clientes: {
          select: {
            razon_social_cliente: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return programacion.map((programaciones) => ({
      id: programaciones.id,
      id_orden_servicio: programaciones.id_orden_servicio,
      id_cliente_programacion: programaciones.id_cliente_programacion,
      razon_social_cliente: programaciones.clientes.razon_social_cliente,
      area_programacion: programaciones.area_programacion,
      ubigeo_programacion: programaciones.ubigeo_programacion,
      direccion_programacion: programaciones.direccion_programacion,
      referencias_programacion: programaciones.referencias_programacion,
      contacto_programacion: programaciones.contacto_programacion,
      telefono_programacion: programaciones.telefono_programacion,
      correo_programacion: programaciones.correo_programacion,
      descripcion_mercancia_programacion:
        programaciones.descripcion_mercancia_programacion,
      cantidad_bultos_programacion: programaciones.cantidad_bultos_programacion,
      peso_mercancia_programacion: programaciones.peso_mercancia_programacion,
      peso_volumen_programacion: programaciones.peso_volumen_programacion,
      metros_cubicos_programacion: programaciones.metros_cubicos_programacion,
      fecha_programacion: programaciones.fecha_programacion.toISOString(),
      hora_programacion: programaciones.hora_programacion,
      id_creador_programacion: programaciones.id_creador_programacion,
      fecha_creado: programaciones.fecha_creado,
    }));
  }
}
