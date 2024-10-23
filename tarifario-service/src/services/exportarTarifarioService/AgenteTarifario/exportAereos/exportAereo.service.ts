import { PrismaClient } from "@prisma/client"; // Importa PrismaClient desde Prisma

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para exportar tarifas de agentes aéreos.
 */
export const ExportarTarifarioAgenteAereoService = {
  /**
   * Obtiene las tarifas de un agente aéreo específico.
   *
   * @param {number} id_agente - El ID del agente tarifario de tipo aéreo para el cual se desean obtener las tarifas.
   * @returns {Promise<Array>} Una promesa que resuelve a un arreglo de tarifas de agentes aéreos, o un arreglo vacío si no se encuentran tarifas.
   * 
   * @throws {Error} Lanza un error si ocurre un problema al acceder a la base de datos.
   */
  async aereo(id_agente: number) {
    const expAgenteAereo = await prisma.tarifarios_agentes_aereos.findMany({
      where: {
        id_agente_tarifario_agente_aereo: id_agente, // Filtra las tarifas por el ID del agente
      },
      select: {
        kg_tarifario_agente_aereo: true, // Selecciona el peso tarifario
        kg_adicional_tarifario_agente_aereo: true, // Selecciona el peso adicional tarifario
        tmin_tarifario_agente_aereo: true, // Selecciona el tiempo mínimo
        tmax_tarifario_agente_aereo: true, // Selecciona el tiempo máximo
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

    return expAgenteAereo; // Retorna las tarifas encontradas
  },
};
