import { PrismaClient } from "@prisma/client"; // Importa PrismaClient desde Prisma
import { TransportistaCargaDto } from "../../../../dtos/importarTarifarioDto/importarTransportista.dto"; // Importa el DTO para los datos de Transportista Carga

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Clase que proporciona el servicio para importar transportistas y sus tarifas de carga.
 */
export class ImportarTransportistaCargaService {
  /**
   * Inserta datos de tarifas de transportistas de carga en la base de datos.
   * Primero elimina todas las tarifas existentes relacionadas con el transportista específico,
   * luego inserta los nuevos datos de tarifas proporcionados.
   *
   * @param {TransportistaCargaDto[]} data_TransportistasCargas - Arreglo de objetos que contienen las tarifas de los transportistas de carga.
   * @param {number} idTransportista - El ID del transportista correspondiente a las tarifas de carga.
   * @param {number} idUser - El ID del usuario que está realizando la inserción de los datos.
   * 
   * @returns {Promise<void>} No devuelve ningún valor explícito, pero realiza operaciones en la base de datos.
   * 
   * @throws {Error} Si el transportista proporcionado no existe, se lanza un error.
   */
  async insertTransportistasCargas(
    data_TransportistasCargas: TransportistaCargaDto[], 
    idTransportista: number, 
    idUser: number
  ): Promise<void> {
    // Elimina todas las tarifas existentes para el transportista especificado
    await prisma.tarifarios_transportistas_cargas.deleteMany({
      where: {
        id_transportista_tarifario_transportista_carga: idTransportista,
      },
    });

    // Busca el transportista por el ID proporcionado
    const transportista = await prisma.proveedores.findUnique({
      where: { id: idTransportista },
    });

    // Si el transportista no existe, lanza un error
    if (!transportista) throw new Error("El transportista no existe");

    // Itera sobre los datos de los transportistas de carga y los inserta en la base de datos
    for (const element of data_TransportistasCargas) {
      const newTarifa = {
        id_transportista_tarifario_transportista_carga: transportista.id, // Asocia la tarifa con el transportista
        ubigeo_tarifario_transportista_carga: element.ubigeo_tarifario_transportista_carga, // Ubigeo relacionado con la tarifa
        kg_maximo_tarifario_transportista_carga: element.kg_maximo_tarifario_transportista_carga, // Peso máximo permitido
        kg_base_adicional_tarifario_transportista_carga: element.kg_base_adicional_tarifario_transportista_carga, // Peso base adicional
        paquete_tarifario_transportista_carga: element.paquete_tarifario_transportista_carga, // Paquete relacionado con la tarifa
        tmin_tarifario_transportista_carga: element.tmin_tarifario_transportista_carga, // Tiempo mínimo de entrega
        tmax_tarifario_transportista_carga: element.tmax_tarifario_transportista_carga, // Tiempo máximo de entrega
        id_creador_tarifario_transportista_carga: idUser, // Usuario que realiza la inserción
        fecha_creado: new Date(), // Fecha y hora de la creación
      };

      // Inserta el nuevo registro de tarifa en la base de datos
      await prisma.tarifarios_transportistas_cargas.create({
        data: newTarifa,
      });
    }
  }
}
