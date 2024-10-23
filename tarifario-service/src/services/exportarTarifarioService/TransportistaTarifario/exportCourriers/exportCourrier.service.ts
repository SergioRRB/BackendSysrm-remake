import { PrismaClient } from "@prisma/client"; // Importa PrismaClient desde Prisma

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para exportar tarifas de courrier de transportistas.
 */
export const ExportarTarifarioTransportistaCourrierService = {
  /**
   * Obtiene las tarifas de courrier de un transportista específico.
   *
   * @param {number} id_transportista - El ID del transportista tarifario para el cual se desean obtener las tarifas.
   * @returns {Promise<Array>} Una promesa que resuelve a un arreglo de tarifas de courrier de transportistas, o un arreglo vacío si no se encuentran tarifas.
   * 
   * @throws {Error} Lanza un error si ocurre un problema al acceder a la base de datos.
   */
  async transportistaCourrier(id_transportista: number) {
    // Realiza una consulta a la base de datos para obtener las tarifas de courrier del transportista
    const expTransportistaCourrier = await prisma.tarifarios_transportistas_courriers.findMany({
      where: {
        id_transportista_tarifario_transportista_courrier: id_transportista, // Filtra las tarifas por el ID del transportista
      },
      select: {
        kg_tarifario_transportista_courrier: true, // Selecciona el kg tarifario
        kg_adicional_tarifario_transportista_courrier: true, // Selecciona el kg adicional tarifario
        tmin_tarifario_transportista_courrier: true, // Selecciona el tiempo mínimo
        tmax_tarifario_transportista_courrier: true, // Selecciona el tiempo máximo
        ubigeo: {
          select: {
            DEPARTAMENTO: true, // Selecciona el departamento
            PROVINCIA: true, // Selecciona la provincia
            DESTINO: true, // Selecciona el destino
          },
        },
        proveedor: {
          select: {
            id: true, // Selecciona el ID del proveedor
          },
        },
      },
      orderBy: {
        id: "desc", // Ordena los resultados por ID en orden descendente
      },
    });

    // Formatea los resultados y retorna las tarifas encontradas
    return expTransportistaCourrier.map((item) => ({
      Departamento: item.ubigeo?.DEPARTAMENTO, // Mapea el departamento
      Provincia: item.ubigeo?.PROVINCIA, // Mapea la provincia
      Distrito: item.ubigeo?.DESTINO, // Mapea el destino
      KG: item.kg_tarifario_transportista_courrier, // Mapea el kg tarifario
      "KG Adicional": item.kg_adicional_tarifario_transportista_courrier, // Mapea el kg adicional tarifario
      "T.Min Entrega": item.tmin_tarifario_transportista_courrier, // Mapea el tiempo mínimo de entrega
      "T.Max Entrega": item.tmax_tarifario_transportista_courrier, // Mapea el tiempo máximo de entrega
    }));
  },
};
