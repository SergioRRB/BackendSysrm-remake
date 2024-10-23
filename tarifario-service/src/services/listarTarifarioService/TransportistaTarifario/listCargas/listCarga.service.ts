import { PrismaClient } from "@prisma/client";

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para manejar las operaciones relacionadas con el tarifario de transportistas de carga.
 */
export const TarifarioTransportistaCargaService = {
  /**
   * Obtiene las tarifas de carga asociadas a un transportista específico.
   *
   * @param {number} id_transportista - El ID del transportista cuyas tarifas de carga se desean recuperar.
   * 
   * @returns {Promise<any[]>} Una promesa que resuelve a un arreglo de objetos con las tarifas de carga del transportista.
   * Cada objeto de tarifa incluye los siguientes campos:
   * - id: El ID de la tarifa de carga.
   * - id_transportista_tarifario_transportista_carga: ID del transportista asociado a la tarifa de carga.
   * - kg_maximo_tarifario_transportista_carga: Peso máximo para la tarifa de carga.
   * - kg_base_adicional_tarifario_transportista_carga: Peso base adicional de la tarifa de carga.
   * - paquete_tarifario_transportista_carga: Información sobre el paquete tarifario.
   * - tmin_tarifario_transportista_carga: Tiempo mínimo de entrega.
   * - tmax_tarifario_transportista_carga: Tiempo máximo de entrega.
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
  async carga(id_transportista: number) {
    // Realiza una consulta para obtener las tarifas de carga de los transportistas basándose en el ID del transportista proporcionado
    const tarifarioTransportistaCarga = await prisma.tarifarios_transportistas_cargas.findMany({
      where: {
        id_transportista_tarifario_transportista_carga: id_transportista, // Filtra por ID del transportista
      },
      select: {
        id: true, // Selecciona el ID de la tarifa de carga
        id_transportista_tarifario_transportista_carga: true, // ID del transportista asociado a la tarifa de carga
        kg_maximo_tarifario_transportista_carga: true, // Peso máximo para la tarifa de carga
        kg_base_adicional_tarifario_transportista_carga: true, // Peso base adicional de la tarifa de carga
        paquete_tarifario_transportista_carga: true, // Información sobre el paquete tarifario
        tmin_tarifario_transportista_carga: true, // Tiempo mínimo de entrega
        tmax_tarifario_transportista_carga: true, // Tiempo máximo de entrega
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

    // Devuelve las tarifas de carga obtenidas
    return tarifarioTransportistaCarga;
  },
};
