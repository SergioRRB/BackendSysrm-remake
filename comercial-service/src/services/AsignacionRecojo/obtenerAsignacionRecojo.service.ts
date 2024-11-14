import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ObtenerAsignacionRecojoService {
  async obtenerAsignaciones() {
    const programaciones = await prisma.programaciones.findMany({
      include: {
        //id: true, // Selecciona el id de la programación
        asignacion_recojos: {
          select: {
            id_orden_servicio_recojo: true, // Asignación del recojo
            id_conductor_recojo: true, // ID del conductor
            id_auxiliar_recojo: true, // ID del auxiliar
            nombre_conductor_recojo: true, // Nombre del conductor
            nombre_auxiliar_recojo: true, // Nombre del auxiliar
          },
        },
        clientes: {
          select: {
            razon_social_cliente: true, // Razon social del cliente
          },
        },
        ubigeo: {
          select: {
            DEPARTAMENTO: true, // Departamento del ubigeo
            PROVINCIA: true, // Provincia del ubigeo
            DESTINO: true, // Destino del ubigeo
          },
        },
      },
      orderBy: {
        id: "desc", // Ordenar por id de forma descendente
      },
    });

    return programaciones;
  }
}
