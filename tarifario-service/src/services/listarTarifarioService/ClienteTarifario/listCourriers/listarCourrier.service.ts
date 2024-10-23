import { PrismaClient } from "@prisma/client";

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para manejar las operaciones relacionadas con el tarifario de clientes de courrier.
 */
export const TarifarioClienteCourrierService = {
  /**
   * Obtiene las tarifas asociadas a un cliente de courrier específico en un área dada.
   *
   * @param {number} id_cliente - El ID del cliente cuyas tarifas se desean recuperar.
   * @param {number} id_area - El ID del área en la que se desea consultar las tarifas.
   * 
   * @returns {Promise<any[]>} Una promesa que resuelve a un arreglo de objetos con las tarifas del cliente de courrier.
   * Cada objeto de tarifa incluye los siguientes campos:
   * - id: El ID de la tarifa.
   * - kg_tarifario_cliente_courrier: Peso permitido para la tarifa de courrier.
   * - kg_adicional_tarifario_cliente_courrier: Peso adicional permitido para la tarifa.
   * - tmin_tarifario_cliente_courrier: Tiempo mínimo de entrega.
   * - tmax_tarifario_cliente_courrier: Tiempo máximo de entrega.
   * - fecha_creado: Fecha y hora de la creación.
   * - ubigeo: Un objeto que contiene la información del UBIGEO, incluyendo:
   *   - UBIGEO: Código UBIGEO.
   *   - DEPARTAMENTO: Nombre del departamento.
   *   - PROVINCIA: Nombre de la provincia.
   *   - DESTINO: Destino del UBIGEO.
   *   - Zona: Zona del UBIGEO.
   * - area: Un objeto que contiene la información del área, incluyendo:
   *   - nombre_area: Nombre del área.
   * - cliente: Un objeto que contiene la información del cliente, incluyendo:
   *   - razon_social_cliente: Razón social del cliente.
   */
  async courrier(id_cliente: number, id_area: number) {
    // Realiza una consulta para obtener las tarifas de los clientes de courrier basándose en el ID del cliente y el área proporcionados
    const tarifarioClienteCourrier = await prisma.tarifarios_clientes_courriers.findMany({
      where: {
        id_cliente_tarifario_cliente_courrier: id_cliente, // Filtra por ID del cliente
        id_area_tarifario_cliente_courrier: id_area, // Filtra por ID del área
      },
      select: {
        id: true, // Selecciona el ID de la tarifa
        kg_tarifario_cliente_courrier: true, // Peso permitido para la tarifa de courrier
        kg_adicional_tarifario_cliente_courrier: true, // Peso adicional permitido
        tmin_tarifario_cliente_courrier: true, // Tiempo mínimo de entrega
        tmax_tarifario_cliente_courrier: true, // Tiempo máximo de entrega
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
        area: {
          select: {
            nombre_area: true, // Nombre del área
          },
        },
        cliente: {
          select: {
            razon_social_cliente: true, // Razón social del cliente
          },
        },
      },
      orderBy: {
        id: "desc", // Ordena los resultados por ID en orden descendente
      },
    });

    // Devuelve las tarifas obtenidas
    return tarifarioClienteCourrier;
  },
};
