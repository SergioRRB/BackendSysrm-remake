import { PrismaClient } from "@prisma/client";

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para manejar las operaciones relacionadas con el tarifario de agentes de courrier.
 */
export const TarifarioAgenteCourrierService = {
  /**
   * Obtiene las tarifas asociadas a un agente de courrier específico.
   *
   * @param {number} id_agente - El ID del agente de courrier cuyas tarifas se desean recuperar.
   * 
   * @returns {Promise<any[]>} Una promesa que resuelve a un arreglo de objetos con las tarifas del agente de courrier.
   * Cada objeto de tarifa incluye los siguientes campos:
   * - id: El ID de la tarifa.
   * - ubigeo_tarifario_agente_courrier: Ubigeo asociado a la tarifa.
   * - kg_tarifario_agente_courrier: Peso relacionado con la tarifa.
   * - kg_adicional_tarifario_agente_courrier: Peso adicional permitido.
   * - tmin_tarifario_agente_courrier: Tiempo mínimo de entrega.
   * - tmax_tarifario_agente_courrier: Tiempo máximo de entrega.
   * - id_creador_tarifario_agente_courrier: ID del creador de la tarifa.
   * - fecha_creado: Fecha y hora de la creación.
   * - ubigeo: Un objeto que contiene la información del UBIGEO, incluyendo:
   *   - UBIGEO: Código UBIGEO.
   *   - DEPARTAMENTO: Nombre del departamento.
   *   - PROVINCIA: Nombre de la provincia.
   *   - DESTINO: Destino del UBIGEO.
   *   - Zona: Zona del UBIGEO.
   * - proveedor: Un objeto que contiene la información del proveedor, incluyendo:
   *   - razon_social_proveedor: Razón social del proveedor.
   */
  async courrier(id_agente: number) {
    // Realiza una consulta para obtener las tarifas de los agentes de courrier basándose en el ID del agente proporcionado
    const tarifarioAgenteCourrier = await prisma.tarifarios_agentes_courriers.findMany({
      where: {
        id_agente_tarifario_agente_courrier: id_agente, // Filtra por ID del agente de courrier
      },
      select: {
        id: true, // Selecciona el ID de la tarifa
        ubigeo_tarifario_agente_courrier: true, // Ubigeo asociado a la tarifa
        kg_tarifario_agente_courrier: true, // Peso relacionado con la tarifa
        kg_adicional_tarifario_agente_courrier: true, // Peso adicional permitido
        tmin_tarifario_agente_courrier: true, // Tiempo mínimo de entrega
        tmax_tarifario_agente_courrier: true, // Tiempo máximo de entrega
        id_creador_tarifario_agente_courrier: true, // ID del creador de la tarifa
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
        proveedor: {
          select: {
            razon_social_proveedor: true, // Razón social del proveedor
          },
        },
      },
      orderBy: {
        id: "desc", // Ordena los resultados por ID en orden descendente
      },
    });

    // Devuelve las tarifas obtenidas
    return tarifarioAgenteCourrier;
  },
};
