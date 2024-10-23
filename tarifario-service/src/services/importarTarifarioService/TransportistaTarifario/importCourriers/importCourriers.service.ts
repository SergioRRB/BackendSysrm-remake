import { PrismaClient } from "@prisma/client"; // Importa PrismaClient desde Prisma
import { TransportistaCourrierDto } from "../../../../dtos/importarTarifarioDto/importarTransportista.dto"; // Importa el DTO para los datos de Transportista Courrier

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Clase que proporciona el servicio para importar transportistas y sus tarifas de courrier.
 */
export class ImportarTransportistaCourrierService {
  /**
   * Inserta datos de tarifas de transportistas de courrier en la base de datos.
   * Primero elimina todas las tarifas existentes relacionadas con el transportista específico,
   * luego inserta los nuevos datos de tarifas proporcionados.
   *
   * @param {TransportistaCourrierDto[]} data_TransportistasCourriers - Arreglo de objetos que contienen las tarifas de los transportistas de courrier.
   * @param {number} idTransportista - El ID del transportista correspondiente a las tarifas de courrier.
   * @param {number} idUser - El ID del usuario que está realizando la inserción de los datos.
   * 
   * @returns {Promise<void>} No devuelve ningún valor explícito, pero realiza operaciones en la base de datos.
   * 
   * @throws {Error} Si el transportista proporcionado no existe, se lanza un error.
   */
  async insertTransportistasCourriers(
    data_TransportistasCourriers: TransportistaCourrierDto[], 
    idTransportista: number, 
    idUser: number
  ): Promise<void> {
    // Elimina todas las tarifas existentes para el transportista especificado
    await prisma.tarifarios_transportistas_courriers.deleteMany({
      where: {
        id_transportista_tarifario_transportista_courrier: idTransportista,
      },
    });

    // Busca el transportista por el ID proporcionado
    const transportista = await prisma.proveedores.findUnique({
      where: { id: idTransportista },
    });

    // Si el transportista no existe, lanza un error
    if (!transportista) throw new Error("El transportista no existe");

    // Itera sobre los datos de los transportistas de courrier y los inserta en la base de datos
    for (const element of data_TransportistasCourriers) {
      const newTarifa = {
        id_transportista_tarifario_transportista_courrier: transportista.id, // Asocia la tarifa con el transportista
        ubigeo_tarifario_transportista_courrier: 
          element.ubigeo_tarifario_transportista_courrier, // Ubigeo relacionado con la tarifa
        kg_tarifario_transportista_courrier: 
          element.kg_tarifario_transportista_courrier, // Peso relacionado con la tarifa
        kg_adicional_tarifario_transportista_courrier: 
          element.kg_adicional_tarifario_transportista_courrier, // Peso adicional permitido
        tmin_tarifario_transportista_courrier: 
          element.tmin_tarifario_transportista_courrier, // Tiempo mínimo de entrega
        tmax_tarifario_transportista_courrier: 
          element.tmax_tarifario_transportista_courrier, // Tiempo máximo de entrega
        id_creador_tarifario_transportista_courrier: idUser, // Usuario que realiza la inserción
        fecha_creado: new Date(), // Fecha y hora de la creación
      };

      // Inserta el nuevo registro de tarifa en la base de datos
      await prisma.tarifarios_transportistas_courriers.create({
        data: newTarifa,
      });
    }
  }
}
