import { PrismaClient } from "@prisma/client";

// Crea una instancia de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

/**
 * Servicio para manejar la selección de tarifas según el tipo de servicio.
 */
export class SelectionTarifarioService {
  /**
   * Obtiene las tarifas basadas en el ubigeo, el cliente y el área.
   *
   * @param {number} id_cliente - El ID del cliente para el cual se desean obtener las tarifas.
   * @param {number} id_area - El ID del área asociada a las tarifas.
   * @param {number} ubigeo - El código UBIGEO relacionado con la tarifa.
   * @param {string} tarifario - El tipo de tarifario a buscar (Courrier, Aerea, Carga, Valorizada).
   * 
   * @returns {Promise<any[]>} Una promesa que resuelve a un arreglo de objetos con las tarifas obtenidas.
   * El formato del objeto varía según el tipo de tarifario:
   * - Para "Courrier": { tmin_tarifario_cliente_courrier, tmax_tarifario_cliente_courrier }
   * - Para "Aerea": { tmin_tarifario_cliente_aereo, tmax_tarifario_cliente_aereo }
   * - Para "Carga": { tmin_tarifario_cliente_carga, tmax_tarifario_cliente_carga }
   * - Para "Valorizada": { producto_tarifario_cliente_valorizado, tmin_tarifario_cliente_valorizado, tmax_tarifario_cliente_valorizado }
   */
  async obtenerTarifarioUbigeo(
    id_cliente: number,
    id_area: number,
    ubigeo: number,
    tarifario: string,
  ) {
    let result;

    // Verifica el tipo de tarifario y realiza la consulta correspondiente
    if (tarifario === "Courrier") {
      result = await prisma.tarifarios_clientes_courriers.findMany({
        where: {
          ubigeo_tarifario_cliente_courrier: ubigeo, // Filtra por UBIGEO
          id_cliente_tarifario_cliente_courrier: id_cliente, // Filtra por ID de cliente
          id_area_tarifario_cliente_courrier: id_area, // Filtra por ID de área
        },
        orderBy: {
          id: "desc", // Ordena los resultados por ID en orden descendente
        },
        select: {
          tmin_tarifario_cliente_courrier: true, // Selecciona el tiempo mínimo de entrega
          tmax_tarifario_cliente_courrier: true, // Selecciona el tiempo máximo de entrega
        },
      });
    } else if (tarifario === "Aerea") {
      result = await prisma.tarifarios_clientes_aereos.findMany({
        where: {
          ubigeo_tarifario_cliente_aereo: ubigeo, // Filtra por UBIGEO
          id_cliente_tarifario_cliente_aereo: id_cliente, // Filtra por ID de cliente
          id_area_tarifario_cliente_aereo: id_area, // Filtra por ID de área
        },
        orderBy: {
          id: "desc", // Ordena los resultados por ID en orden descendente
        },
        select: {
          tmin_tarifario_cliente_aereo: true, // Selecciona el tiempo mínimo de entrega
          tmax_tarifario_cliente_aereo: true, // Selecciona el tiempo máximo de entrega
        },
      });
    } else if (tarifario === "Carga") {
      result = await prisma.tarifarios_clientes_cargas.findMany({
        where: {
          ubigeo_tarifario_cliente_carga: ubigeo, // Filtra por UBIGEO
          id_cliente_tarifario_cliente_carga: id_cliente, // Filtra por ID de cliente
          id_area_tarifario_cliente_carga: id_area, // Filtra por ID de área
        },
        orderBy: {
          id: "desc", // Ordena los resultados por ID en orden descendente
        },
        select: {
          tmin_tarifario_cliente_carga: true, // Selecciona el tiempo mínimo de entrega
          tmax_tarifario_cliente_carga: true, // Selecciona el tiempo máximo de entrega
        },
      });
    } else if (tarifario === "Valorizada") {
      result = await prisma.tarifarios_clientes_valorizados.findMany({
        where: {
          ubigeo_tarifario_cliente_valorizado: ubigeo, // Filtra por UBIGEO
          id_cliente_tarifario_cliente_valorizado: id_cliente, // Filtra por ID de cliente
          id_area_tarifario_cliente_valorizado: id_area, // Filtra por ID de área
        },
        orderBy: {
          id: "desc", // Ordena los resultados por ID en orden descendente
        },
        select: {
          producto_tarifario_cliente_valorizado: true, // Selecciona el producto tarifario
          tmin_tarifario_cliente_valorizado: true, // Selecciona el tiempo mínimo de entrega
          tmax_tarifario_cliente_valorizado: true, // Selecciona el tiempo máximo de entrega
        },
      });
    }

    return result; // Devuelve los resultados obtenidos
  }
}
