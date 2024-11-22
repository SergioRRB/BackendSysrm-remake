import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Servicio para obtener asignaciones de recojo desde la base de datos.
 */
export class ObtenerAsignacionRecojoService {
  /**
   * Método para obtener una lista de asignaciones con datos relacionados.
   * @returns {Promise<object>} Objeto con el estado de la operación, mensaje y datos obtenidos.
   */
  async obtenerAsignaciones() {
    try {
      // Realizar la consulta utilizando Prisma para obtener las asignaciones
      const asignaciones = await prisma.programaciones.findMany({
        select: {
          id: true,
          id_orden_servicio: true,
          id_cliente_programacion: true,
          area_programacion: true,
          ubigeo_programacion: true,
          direccion_programacion: true,
          referencias_programacion: true,
          contacto_programacion: true,
          telefono_programacion: true,
          correo_programacion: true,
          descripcion_mercancia_programacion: true,
          cantidad_bultos_programacion: true,
          peso_mercancia_programacion: true,
          peso_volumen_programacion: true,
          metros_cubicos_programacion: true,
          fecha_programacion: true,
          hora_programacion: true,
          id_creador_programacion: true,
          fecha_creado: true,

          // Relacionar las tablas necesarias
          asignacion_recojos: {
            select: {
              id_orden_servicio_recojo: true,
              nombre_auxiliar_recojo: true,
              nombre_conductor_recojo: true,
            },
          },

          clientes: {
            select: {
              razon_social_cliente: true,
            },
          },
          ubigeo: {
            select: {
              DEPARTAMENTO: true,
              PROVINCIA: true,
              DESTINO: true,
            },
          },
        },
        orderBy: {
          id: "desc", // Ordenar por el ID en orden descendente
        },
      });

      return {
        success: true,
        message: "Asignaciones obtenidas correctamente",
        datos: asignaciones,
      };
    } catch (error: any) {
      return {
        success: false,
        message: "Error al obtener asignaciones",
        error: error.message,
      };
    }
  }
}
