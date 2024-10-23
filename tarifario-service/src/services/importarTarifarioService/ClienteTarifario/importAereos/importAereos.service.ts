import { PrismaClient } from '@prisma/client'; // Importa PrismaClient desde Prisma
import { ClienteAereoDto } from '../../../../dtos/importarTarifarioDto/importarCliente.dto'; // Importa el DTO para los datos de Cliente Aéreo

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Clase que proporciona el servicio para importar clientes aéreos y sus tarifas.
 */
export class ImportarClienteAereoService {
  /**
   * Inserta datos de tarifas de clientes aéreos en la base de datos.
   * Primero elimina todas las tarifas existentes relacionadas con el cliente específico,
   * luego inserta los nuevos datos de tarifas proporcionados.
   *
   * @param {ClienteAereoDto[]} data_ClientesAereos - Arreglo de objetos que contienen las tarifas de los clientes aéreos.
   * @param {number} idCliente - El ID del cliente correspondiente a las tarifas de los clientes aéreos.
   * @param {number} idArea - El ID del área correspondiente a las tarifas de los clientes aéreos.
   * @param {number} idUser - El ID del usuario que está realizando la inserción de los datos.
   * 
   * @returns {Promise<void>} No devuelve ningún valor explícito, pero realiza operaciones en la base de datos.
   * 
   * @throws {Error} Si el cliente o el área proporcionados no existen, se lanza un error.
   */
  async insertClientesAereos(data_ClientesAereos: ClienteAereoDto[], idCliente: number, idArea: number, idUser: number): Promise<void> {
    // Elimina todas las tarifas existentes para el cliente especificado
    await prisma.tarifarios_clientes_aereos.deleteMany({
      where: { id_cliente_tarifario_cliente_aereo: idCliente },
    });

    // Busca el cliente por el ID proporcionado
    const cliente = await prisma.clientes.findUnique({
      where: { id: idCliente },
    });

    // Busca el área por el ID proporcionado
    const area = await prisma.areas.findUnique({
      where: { id: idArea },
    });

    // Si el cliente no existe, lanza un error
    if (!cliente) throw new Error('El cliente no existe');
    // Si el área no existe, lanza un error
    if (!area) throw new Error('El área no existe');

    // Itera sobre los datos de los clientes aéreos y los inserta en la base de datos
    for (const element of data_ClientesAereos) {
      const newTarifa = {
        id_cliente_tarifario_cliente_aereo: cliente.id, // Asocia la tarifa con el cliente
        id_area_tarifario_cliente_aereo: area.id, // Asocia la tarifa con el área
        ubigeo_tarifario_cliente_aereo: element.ubigeo_tarifario_cliente_aereo, // Ubigeo relacionado con la tarifa
        kg_tarifario_cliente_aereo: element.kg_tarifario_cliente_aereo, // Kilogramos base para la tarifa
        kg_adicional_tarifario_cliente_aereo: element.kg_adicional_tarifario_cliente_aereo, // Kilogramos adicionales
        tmin_tarifario_cliente_aereo: element.tmin_tarifario_cliente_aereo, // Tiempo mínimo de entrega
        tmax_tarifario_cliente_aereo: element.tmax_tarifario_cliente_aereo, // Tiempo máximo de entrega
        id_creador_tarifario_cliente_aereo: idUser, // Usuario que realiza la inserción
        fecha_creado: new Date(), // Fecha y hora de la creación
      };

      // Inserta el nuevo registro de tarifa en la base de datos
      await prisma.tarifarios_clientes_aereos.create({
        data: newTarifa,
      });
    }
  }
}
