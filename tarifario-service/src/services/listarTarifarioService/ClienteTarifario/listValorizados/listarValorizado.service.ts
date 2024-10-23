import { PrismaClient } from "@prisma/client";

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para manejar las operaciones relacionadas con el tarifario de clientes valorizados.
 */
export const TarifarioClienteValorizadoService = {
  /**
   * Obtiene los productos valorizados asociados a un cliente específico en un área dada.
   *
   * @param {number} id_cliente - El ID del cliente cuyas tarifas valorizadas se desean recuperar.
   * @param {number} id_area - El ID del área en la que se desea consultar las tarifas valorizadas.
   * 
   * @returns {Promise<any[]>} Una promesa que resuelve a un arreglo de objetos con los productos valorizados del cliente.
   * Cada objeto de tarifa incluye los siguientes campos:
   * - id: El ID de la tarifa valorizada.
   * - id_cliente_tarifario_cliente_valorizado: ID del cliente asociado a la tarifa valorizada.
   * - producto_tarifario_cliente_valorizado: Nombre del producto asociado a la tarifa valorizada.
   * - costo_producto_tarifario_cliente_valorizado: Costo del producto valorizado.
   * - tmin_tarifario_cliente_valorizado: Tiempo mínimo de entrega.
   * - tmax_tarifario_cliente_valorizado: Tiempo máximo de entrega.
   * - id_creador_tarifario_cliente_valorizado: ID del creador de la tarifa valorizada.
   * - fecha_creado: Fecha y hora de la creación.
   * - ubigeo: Un objeto que contiene la información del UBIGEO, incluyendo:
   *   - UBIGEO: Código UBIGEO.
   *   - DEPARTAMENTO: Nombre del departamento.
   *   - PROVINCIA: Nombre de la provincia.
   *   - DESTINO: Destino del UBIGEO.
   *   - Zona: Zona del UBIGEO.
   * - cliente: Un objeto que contiene la información del cliente, incluyendo:
   *   - razon_social_cliente: Razón social del cliente.
   * - area: Un objeto que contiene la información del área, incluyendo:
   *   - nombre_area: Nombre del área.
   */
  async valorizados(id_cliente: number, id_area: number) {
    // Realiza una consulta para obtener los productos valorizados de los clientes basándose en el ID del cliente y el área proporcionados
    const tarifarioClienteValorizado = await prisma.tarifarios_clientes_valorizados.findMany({
      where: {
        id_cliente_tarifario_cliente_valorizado: id_cliente, // Filtra por ID del cliente
        id_area_tarifario_cliente_valorizado: id_area, // Filtra por ID del área
      },
      select: {
        id: true, // Selecciona el ID de la tarifa valorizada
        id_cliente_tarifario_cliente_valorizado: true, // ID del cliente asociado a la tarifa valorizada
        producto_tarifario_cliente_valorizado: true, // Nombre del producto
        costo_producto_tarifario_cliente_valorizado: true, // Costo del producto
        tmin_tarifario_cliente_valorizado: true, // Tiempo mínimo de entrega
        tmax_tarifario_cliente_valorizado: true, // Tiempo máximo de entrega
        id_creador_tarifario_cliente_valorizado: true, // ID del creador de la tarifa valorizada
        fecha_creado: true, // Fecha y hora de la creación
        ubigeo: {
          select: {
            UBIGEO: true, // Código UBIGEO
            DEPARTAMENTO: true, // Departamento del UBIGEO
            PROVINCIA: true, // Provincia del UBIGEO
            DESTINO: true, // Destino del UBIGEO
            Zona: true, // Zona del UBIGEO
          },
        },
        cliente: {
          select: {
            razon_social_cliente: true, // Razón social del cliente
          },
        },
        area: {
          select: {
            nombre_area: true, // Nombre del área
          },
        },
      },
      orderBy: {
        id: "desc", // Ordena los resultados por ID en orden descendente
      },
    });

    // Devuelve los productos valorizados obtenidos
    return tarifarioClienteValorizado;
  },
};
