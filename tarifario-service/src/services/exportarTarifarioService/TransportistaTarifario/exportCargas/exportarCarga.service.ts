import { PrismaClient } from "@prisma/client"; // Importa PrismaClient desde Prisma

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para exportar tarifas de carga de transportistas.
 */
export const ExportarTarifarioTransportistaCargaService = {
  /**
   * Obtiene las tarifas de carga de un transportista específico.
   *
   * @param {number} id_transportista - El ID del transportista tarifario para el cual se desean obtener las tarifas.
   * @returns {Promise<Array>} Una promesa que resuelve a un arreglo de tarifas de carga de transportistas, o un arreglo vacío si no se encuentran tarifas.
   * 
   * @throws {Error} Lanza un error si ocurre un problema al acceder a la base de datos.
   */
  async transportistaCarga(id_transportista: number) {
    // Realiza una consulta a la base de datos para obtener las tarifas de carga del transportista
    const expTransportistaCarga = await prisma.tarifarios_transportistas_cargas.findMany({
      where: {
        id_transportista_tarifario_transportista_carga: id_transportista, // Filtra las tarifas por el ID del transportista
      },
      select: {
        kg_maximo_tarifario_transportista_carga: true, // Selecciona el kg máximo tarifario
        kg_base_adicional_tarifario_transportista_carga: true, // Selecciona el kg base adicional tarifario
        paquete_tarifario_transportista_carga: true, // Selecciona el paquete tarifario
        tmin_tarifario_transportista_carga: true, // Selecciona el tiempo mínimo
        tmax_tarifario_transportista_carga: true, // Selecciona el tiempo máximo
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
    return expTransportistaCarga.map((item) => ({
      Departamento: item.ubigeo?.DEPARTAMENTO, // Mapea el departamento
      Provincia: item.ubigeo?.PROVINCIA, // Mapea la provincia
      Distrito: item.ubigeo?.DESTINO, // Mapea el destino
      "KG Maximo": item.kg_maximo_tarifario_transportista_carga, // Mapea el kg máximo tarifario
      "KG Base": item.kg_base_adicional_tarifario_transportista_carga, // Mapea el kg base adicional tarifario
      Paquete: item.paquete_tarifario_transportista_carga, // Mapea el paquete tarifario
      "T.Min Entrega": item.tmin_tarifario_transportista_carga, // Mapea el tiempo mínimo de entrega
      "T.Max Entrega": item.tmax_tarifario_transportista_carga, // Mapea el tiempo máximo de entrega
    }));
  },
};

