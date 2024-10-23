import { PrismaClient } from "@prisma/client";

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para manejar las operaciones relacionadas con el listado de tarifas de transportistas de courrier.
 */
export const ListarTarifarioTransportistaCourrierService = {
  /**
   * Obtiene las tarifas de courrier asociadas a un transportista específico.
   *
   * @param {number} id_transportista - El ID del transportista cuyas tarifas de courrier se desean recuperar.
   * 
   * @returns {Promise<any[]>} Una promesa que resuelve a un arreglo de objetos con las tarifas de courrier del transportista.
   * Cada objeto de tarifa incluye los siguientes campos:
   * - id: El ID de la tarifa de courrier.
   * - transportista_id: ID del transportista asociado a la tarifa de courrier.
   * - razon_social: Razón social del proveedor asociado a la tarifa.
   * - ubigeo: Código UBIGEO de la tarifa.
   * - departamento: Nombre del departamento de la tarifa.
   * - provincia: Nombre de la provincia de la tarifa.
   * - distrito: Nombre del destino de la tarifa.
   * - zona: Zona de la tarifa.
   * - KG: Peso tarifario para la carga.
   * - KG Adicional: Peso adicional tarifario para la carga.
   * - T.Min Entrega: Tiempo mínimo de entrega.
   * - T.Max Entrega: Tiempo máximo de entrega.
   * - id_creador: ID del creador de la tarifa de courrier.
   * - fecha_creado: Fecha y hora de la creación de la tarifa.
   */
  async courrier(id_transportista: number) {
    // Realiza una consulta para obtener las tarifas de courrier de los transportistas basándose en el ID del transportista proporcionado
    const tarifarioTransportistaCourrier = await prisma.tarifarios_transportistas_courriers.findMany({
      where: {
        id_transportista_tarifario_transportista_courrier: id_transportista, // Filtra por ID del transportista
      },
      select: {
        id: true, // Selecciona el ID de la tarifa de courrier
        id_transportista_tarifario_transportista_courrier: true, // ID del transportista asociado a la tarifa de courrier
        kg_tarifario_transportista_courrier: true, // Peso tarifario para la carga
        kg_adicional_tarifario_transportista_courrier: true, // Peso adicional tarifario para la carga
        tmin_tarifario_transportista_courrier: true, // Tiempo mínimo de entrega
        tmax_tarifario_transportista_courrier: true, // Tiempo máximo de entrega
        id_creador_tarifario_transportista_courrier: true, // ID del creador de la tarifa
        fecha_creado: true, // Fecha y hora de la creación
        ubigeo: {
          select: {
            UBIGEO: true, // Código UBIGEO
            DEPARTAMENTO: true, // Nombre del departamento
            PROVINCIA: true, // Nombre de la provincia
            DESTINO: true, // Nombre del destino
            Zona: true, // Zona de la tarifa
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

    // Mapea los resultados para dar formato a la respuesta
    return tarifarioTransportistaCourrier.map((item) => ({
      id: item.id, // ID de la tarifa de courrier
      transportista_id: item.id_transportista_tarifario_transportista_courrier, // ID del transportista
      razon_social: item.proveedor?.razon_social_proveedor, // Razón social del proveedor
      ubigeo: item.ubigeo?.UBIGEO, // Código UBIGEO
      departamento: item.ubigeo?.DEPARTAMENTO, // Nombre del departamento
      provincia: item.ubigeo?.PROVINCIA, // Nombre de la provincia
      distrito: item.ubigeo?.DESTINO, // Nombre del destino
      zona: item.ubigeo?.Zona, // Zona de la tarifa
      KG: item.kg_tarifario_transportista_courrier, // Peso tarifario para la carga
      "KG Adicional": item.kg_adicional_tarifario_transportista_courrier, // Peso adicional tarifario
      "T.Min Entrega": item.tmin_tarifario_transportista_courrier, // Tiempo mínimo de entrega
      "T.Max Entrega": item.tmax_tarifario_transportista_courrier, // Tiempo máximo de entrega
      id_creador: item.id_creador_tarifario_transportista_courrier, // ID del creador de la tarifa
      fecha_creado: item.fecha_creado, // Fecha de creación
    }));
  },
};
