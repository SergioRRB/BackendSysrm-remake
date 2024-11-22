import { PrismaClient } from "@prisma/client";

// Crear una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Clase `ListarProgramacionService`
 * Proporciona un servicio para listar programaciones con detalles adicionales.
 */
export class ListarProgramacionService {
  /**
   * Método `listarProgramaciones`
   * Obtiene una lista de programaciones desde la base de datos, incluyendo la razón social del cliente asociado.
   *
   * @returns {Promise<Array>} Lista de programaciones con sus campos y detalles relevantes.
   *
   * Detalles:
   * - Recupera todas las programaciones desde la tabla `programaciones`.
   * - Incluye la razón social del cliente desde la tabla `clientes`.
   * - Ordena los resultados por el campo `id` en orden descendente.
   * - Mapea los datos para devolver un objeto estructurado con los campos seleccionados.
   */
  async listarProgramaciones() {
    // Consulta las programaciones desde la base de datos con detalles del cliente
    const programacion = await prisma.programaciones.findMany({
      include: {
        clientes: {
          select: {
            razon_social_cliente: true, // Selecciona solo la razón social del cliente
          },
        },
      },
      orderBy: {
        id: "desc", // Ordena por ID en orden descendente
      },
    });

    // Mapea los datos obtenidos para estructurarlos en el formato deseado
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
