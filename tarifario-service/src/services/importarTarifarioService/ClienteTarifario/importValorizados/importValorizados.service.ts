import { PrismaClient } from "@prisma/client"; // Importa PrismaClient desde Prisma
import { ClienteValorizadoDto } from "../../../../dtos/importarTarifarioDto/importarCliente.dto"; // Importa el DTO para los datos de Cliente Valorizado

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Clase que proporciona el servicio para importar clientes valorizados y sus tarifas.
 */
export class ImportarClienteValorizadoService {
  /**
   * Inserta datos de tarifas de clientes valorizados en la base de datos.
   * Primero elimina todas las tarifas existentes relacionadas con el cliente específico,
   * luego inserta los nuevos datos de tarifas proporcionados.
   *
   * @param {ClienteValorizadoDto[]} data_ClientesValorizados - Arreglo de objetos que contienen las tarifas de los clientes valorizados.
   * @param {number} idCliente - El ID del cliente correspondiente a las tarifas de los clientes valorizados.
   * @param {number} idArea - El ID del área correspondiente a las tarifas de los clientes valorizados.
   * @param {number} idUser - El ID del usuario que está realizando la inserción de los datos.
   * 
   * @returns {Promise<void>} No devuelve ningún valor explícito, pero realiza operaciones en la base de datos.
   * 
   * @throws {Error} Si el cliente o el área proporcionados no existen, se lanza un error.
   */
  async insertClientesValorizados(
    data_ClientesValorizados: ClienteValorizadoDto[], 
    idCliente: number, 
    idArea: number, 
    idUser: number
  ): Promise<void> {
    // Elimina todas las tarifas existentes para el cliente especificado
    await prisma.tarifarios_clientes_valorizados.deleteMany({
      where: { id_cliente_tarifario_cliente_valorizado: idCliente },
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
    if (!cliente) throw new Error("El cliente no existe");
    // Si el área no existe, lanza un error
    if (!area) throw new Error("El área no existe");

    // Itera sobre los datos de los clientes valorizados y los inserta en la base de datos
    for (const element of data_ClientesValorizados) {
      const newTarifa = {
        id_cliente_tarifario_cliente_valorizado: cliente.id, // Asocia la tarifa con el cliente
        id_area_tarifario_cliente_valorizado: area.id, // Asocia la tarifa con el área
        ubigeo_tarifario_cliente_valorizado: element.ubigeo_tarifario_cliente_valorizado, // Ubigeo relacionado con la tarifa
        producto_tarifario_cliente_valorizado: element.producto_tarifario_cliente_valorizado, // Producto relacionado con la tarifa
        costo_producto_tarifario_cliente_valorizado: element.costo_producto_tarifario_cliente_valorizado, // Costo del producto
        tmin_tarifario_cliente_valorizado: element.tmin_tarifario_cliente_valorizado, // Tiempo mínimo de entrega
        tmax_tarifario_cliente_valorizado: element.tmax_tarifario_cliente_valorizado, // Tiempo máximo de entrega
        id_creador_tarifario_cliente_valorizado: idUser, // Usuario que realiza la inserción
        fecha_creado: new Date(), // Fecha y hora de la creación
      };

      // Inserta el nuevo registro de tarifa en la base de datos
      await prisma.tarifarios_clientes_valorizados.create({
        data: newTarifa,
      });
    }
  }
}
