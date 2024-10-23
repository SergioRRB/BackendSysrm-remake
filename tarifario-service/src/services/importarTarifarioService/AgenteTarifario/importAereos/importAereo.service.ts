import { PrismaClient } from '@prisma/client'; // Importa PrismaClient desde Prisma
import { AgenteAereoDto } from '../../../../dtos/importarTarifarioDto/importarAgente.dto'; // Importa el DTO para los datos de Agente Aéreo

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Clase que proporciona el servicio para importar agentes aéreos y sus tarifas.
 */
export class ImportarAgenteAereoService {
  /**
   * Inserta datos de tarifas de agentes aéreos en la base de datos.
   * Primero elimina todas las tarifas existentes relacionadas con el área específica,
   * luego inserta los nuevos datos de tarifas proporcionados.
   *
   * @param {AgenteAereoDto[]} data_AgenteAereo - Arreglo de objetos que contienen las tarifas de los agentes aéreos.
   * @param {number} idArea - El ID del área correspondiente a las tarifas de agentes aéreos.
   * @param {number} idUser - El ID del usuario que está realizando la inserción de los datos.
   * 
   * @returns {Promise<void>} No devuelve ningún valor explícito, pero realiza operaciones en la base de datos.
   * 
   * @throws {Error} Si el área proporcionada no existe, se lanza un error.
   */
  async insertAgenteAereo(data_AgenteAereo: AgenteAereoDto[], idArea: number, idUser: number): Promise<void> {
    // Elimina todas las tarifas existentes para el área especificada
    await prisma.tarifarios_agentes_aereos.deleteMany({
      where: { id_agente_tarifario_agente_aereo: idArea },
    });

    // Busca el área por el ID proporcionado
    const area = await prisma.areas.findUnique({
      where: { id: idArea },
    });

    // Si el área no existe, lanza un error
    if (!area) throw new Error('El área no existe');

    // Obtiene todos los registros de ubigeos disponibles en la base de datos
    const ubigeos = await prisma.ubigeo.findMany();

    // Itera sobre los datos del agente aéreo y los inserta en la base de datos
    for (const element of data_AgenteAereo) {
      const newTarifa = {
        id_agente_tarifario_agente_aereo: area.id, // Asocia la tarifa con el área
        ubigeo_tarifario_agente_aereo: element.ubigeo_tarifario_agente_aereo, // Ubigeo relacionado con la tarifa
        kg_tarifario_agente_aereo: element.kg_tarifario_agente_aereo, // Kilogramos base para la tarifa
        kg_adicional_tarifario_agente_aereo: element.kg_adicional_tarifario_agente_aereo, // Kilogramos adicionales
        tmin_tarifario_agente_aereo: element.tmin_tarifario_agente_aereo, // Tiempo mínimo de entrega
        tmax_tarifario_agente_aereo: element.tmax_tarifario_agente_aereo, // Tiempo máximo de entrega
        id_creador_tarifario_agente_aereo: idUser, // Usuario que realiza la inserción
        fecha_creado: new Date(), // Fecha y hora de la creación
      };

      // Inserta el nuevo registro de tarifa en la base de datos
      await prisma.tarifarios_agentes_aereos.create({
        data: newTarifa,
      });
    }
  }
}
