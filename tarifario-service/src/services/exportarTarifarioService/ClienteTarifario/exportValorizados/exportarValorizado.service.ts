import { PrismaClient } from "@prisma/client"; // Importa PrismaClient desde Prisma

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para exportar tarifas valorizadas de clientes.
 */
export const ExportarTarifarioClienteValorizadoService = {
  /**
   * Obtiene las tarifas valorizadas de un cliente específico en un área determinada.
   *
   * @param {number} id_cliente - El ID del cliente tarifario valorizado para el cual se desean obtener las tarifas.
   * @param {number} id_area - El ID del área tarifaria correspondiente al cliente.
   * @returns {Promise<Array>} Una promesa que resuelve a un arreglo de tarifas valorizadas de clientes, o un arreglo vacío si no se encuentran tarifas.
   * 
   * @throws {Error} Lanza un error si ocurre un problema al acceder a la base de datos.
   */
  async valorizadoCliente(id_cliente: number, id_area: number) {
    // Realiza una consulta a la base de datos para obtener las tarifas valorizadas del cliente
    const expClienteValorizado = await prisma.tarifarios_clientes_valorizados.findMany({
      where: {
        id_cliente_tarifario_cliente_valorizado: id_cliente, // Filtra las tarifas por el ID del cliente
        id_area_tarifario_cliente_valorizado: id_area, // Filtra las tarifas por el ID del área
      },
      select: {
        producto_tarifario_cliente_valorizado: true, // Selecciona el producto tarifario
        costo_producto_tarifario_cliente_valorizado: true, // Selecciona el costo del producto tarifario
        tmin_tarifario_cliente_valorizado: true, // Selecciona el tiempo mínimo
        tmax_tarifario_cliente_valorizado: true, // Selecciona el tiempo máximo
        ubigeo: {
          select: {
            DEPARTAMENTO: true, // Selecciona el departamento
            PROVINCIA: true, // Selecciona la provincia
            DESTINO: true, // Selecciona el destino
          },
        },
        area: {
          select: {
            id: true, // Selecciona el ID del área
          },
        },
        cliente: {
          select: {
            id: true, // Selecciona el ID del cliente
          },
        },
      },
      orderBy: {
        id: "desc", // Ordena los resultados por ID en orden descendente
      },
    });

    // Formatea los resultados y retorna las tarifas encontradas
    return expClienteValorizado.map((item) => ({
      Departamento: item.ubigeo?.DEPARTAMENTO, // Mapea el departamento
      Provincia: item.ubigeo?.PROVINCIA, // Mapea la provincia
      Distrito: item.ubigeo?.DESTINO, // Mapea el destino
      Producto: item.producto_tarifario_cliente_valorizado, // Mapea el producto tarifario
      "S/ Producto": item.costo_producto_tarifario_cliente_valorizado, // Mapea el costo del producto
      "T.Min Entrega": item.tmin_tarifario_cliente_valorizado, // Mapea el tiempo mínimo de entrega
      "T.Max Entrega": item.tmax_tarifario_cliente_valorizado, // Mapea el tiempo máximo de entrega
    }));
  },
};
