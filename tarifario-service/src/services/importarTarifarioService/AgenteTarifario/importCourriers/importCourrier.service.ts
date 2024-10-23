import { PrismaClient } from '@prisma/client'; // Importa PrismaClient desde Prisma
import { AgenteCourrierDto } from '../../../../dtos/importarTarifarioDto/importarAgente.dto'; // Importa el DTO para los datos de Agente Courrier

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Clase que proporciona el servicio para importar agentes courriers y sus tarifas.
 */
export class ImportarAgenteCourrierService {
  /**
   * Inserta datos de tarifas de agentes courriers en la base de datos.
   * Primero elimina todas las tarifas existentes relacionadas con el área específica,
   * luego inserta los nuevos datos de tarifas proporcionados.
   *
   * @param {AgenteCourrierDto[]} data_AgenteCourrier - Arreglo de objetos que contienen las tarifas de los agentes courriers.
   * @param {number} idArea - El ID del área correspondiente a las tarifas de agentes courriers.
   * @param {number} idUser - El ID del usuario que está realizando la inserción de los datos.
   * 
   * @returns {Promise<void>} No devuelve ningún valor explícito, pero realiza operaciones en la base de datos.
   * 
   * @throws {Error} Si el área proporcionada no existe, se lanza un error.
   */
  async insertCourrier(data_AgenteCourrier: AgenteCourrierDto[], idArea: number, idUser: number): Promise<void> {
    // Elimina todas las tarifas existentes para el área especificada
    await prisma.tarifarios_agentes_courriers.deleteMany({
      where: { id_agente_tarifario_agente_courrier: idArea },
    });

    // Busca el área por el ID proporcionado
    const area = await prisma.areas.findUnique({
      where: { id: idArea },
    });

    // Si el área no existe, lanza un error
    if (!area) throw new Error('El área no existe');

    // Itera sobre los datos del agente courrier y los inserta en la base de datos
    for (const element of data_AgenteCourrier) {
      const newTarifa = {
        id_agente_tarifario_agente_courrier: area.id, // Asocia la tarifa con el área
        ubigeo_tarifario_agente_courrier: element.ubigeo_tarifario_agente_courrier, // Ubigeo relacionado con la tarifa
        kg_tarifario_agente_courrier: element.kg_tarifario_agente_courrier, // Kilogramos base para la tarifa
        kg_adicional_tarifario_agente_courrier: element.kg_adicional_tarifario_agente_courrier, // Kilogramos adicionales
        tmin_tarifario_agente_courrier: element.tmin_tarifario_agente_courrier, // Tiempo mínimo de entrega
        tmax_tarifario_agente_courrier: element.tmax_tarifario_agente_courrier, // Tiempo máximo de entrega
        id_creador_tarifario_agente_courrier: idUser, // Usuario que realiza la inserción
        fecha_creado: new Date(), // Fecha y hora de la creación
      };

      // Inserta el nuevo registro de tarifa en la base de datos
      await prisma.tarifarios_agentes_courriers.create({
        data: newTarifa,
      });
    }
  }
}
