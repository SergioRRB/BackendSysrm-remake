import { PrismaClient } from "@prisma/client"; // Importa PrismaClient desde Prisma

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Exporta los datos de ubigeo (departamento, provincia y destino) desde la base de datos.
 *
 * @returns {Promise<Array>} Una promesa que resuelve a un arreglo de objetos de ubigeo, cada uno conteniendo
 *                          información sobre departamento, provincia y destino.
 * 
 * @throws {Error} Lanza un error si ocurre un problema al acceder a la base de datos.
 */
export const exportarUbigeo = async () => {
  try {
    // Realiza una consulta a la base de datos para obtener los datos de ubigeo
    const ubigeos = await prisma.ubigeo.findMany({
      select: {
        DEPARTAMENTO: true, // Selecciona el departamento
        PROVINCIA: true,    // Selecciona la provincia
        DESTINO: true,      // Selecciona el destino
      },
    });
    return ubigeos; // Retorna el arreglo de ubigeos
  } catch (error) {
    console.error("Error al exportar los datos de ubigeo:", error); // Registra el error en la consola
    throw error; // Lanza el error para que pueda ser manejado en el lugar donde se invoque la función
  }
};
