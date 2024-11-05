import { PrismaClient } from "@prisma/client";
import { Decimal } from "decimal.js"; // Asegúrate de importar Decimal si es necesario

const prisma = new PrismaClient();

/**
 * Servicio para exportar validaciones.
 */
export class ExportarValidationService {
  /**
   * Exporta las validaciones y calcula los totales relacionados.
   *
   * Este método realiza las siguientes acciones:
   * 1. Recupera todas las validaciones desde la base de datos, incluyendo detalles sobre
   *    cotizaciones, usuarios, y destinos de cotización.
   * 2. Calcula el total de bultos, costo de envío, y costos adicionales para cada validación.
   * 3. Retorna un arreglo de objetos que representan las validaciones exportadas con
   *    información agregada.
   *
   * @returns {Promise<Array<{
   *   fechaCreado: Date;
   *   colaboradorUsuario: string | null;
   *   idOrdenServicioValidacion: string;
   *   razonSocialCliente: string | undefined;
   *   totalBultos: number;
   *   cantidadDestinosCotizacion: number;
   *   totalCostoEnvio: number;
   *   totalCostoAdicional: number;
   *   reciboCotizacion: string | undefined;
   *   precioTotalCotizacion: Decimal | null;
   * }>>} - Retorna una promesa que resuelve en un arreglo de objetos que contienen
   * información de las validaciones exportadas.
   */
  async exportarValidaciones() {
    const validaciones = await prisma.validaciones.findMany({
      select: {
        fecha_creado: true,
        id_orden_servicio_validacion: true,
        usuarios: {
          select: {
            colaborador_usuario: true,
          },
        },
        cotizaciones: {
          select: {
            cantidad_destinos_cotizacion: true,
            recibo_cotizacion: true,
            precio_total_cotizacion: true,
            cliente: {
              select: {
                razon_social_cliente: true,
              },
            },
            cotizaciones_destinos: {
              select: {
                cantidad_mercancia_cotizacion_destino: true,
                total_tarifa_cotizacion_destino: true,
                total_adicional_cotizacion_destino: true,
              },
            },
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    // Calcular los totales en el cliente
    return validaciones.map((validacion) => {
      const totalBultos = validacion.cotizaciones.reduce(
        (sum, cotizacion) =>
          sum +
          cotizacion.cotizaciones_destinos.reduce(
            (innerSum, destino) =>
              innerSum + (destino.cantidad_mercancia_cotizacion_destino || 0),
            0,
          ),
        0,
      );

      const totalCostoEnvio = validacion.cotizaciones.reduce(
        (sum, cotizacion) =>
          sum +
          cotizacion.cotizaciones_destinos.reduce(
            (innerSum, destino) =>
              innerSum +
              (destino.total_tarifa_cotizacion_destino
                ? destino.total_tarifa_cotizacion_destino.toNumber() // Convertir a número
                : 0),
            0,
          ),
        0,
      );

      const totalCostoAdicional = validacion.cotizaciones.reduce(
        (sum, cotizacion) =>
          sum +
          cotizacion.cotizaciones_destinos.reduce(
            (innerSum, destino) =>
              innerSum +
              (destino.total_adicional_cotizacion_destino
                ? destino.total_adicional_cotizacion_destino.toNumber() // Convertir a número
                : 0),
            0,
          ),
        0,
      );

      return {
        fechaCreado: validacion.fecha_creado,
        colaboradorUsuario: validacion.usuarios?.colaborador_usuario,
        idOrdenServicioValidacion: validacion.id_orden_servicio_validacion,
        razonSocialCliente:
          validacion.cotizaciones[0]?.cliente?.razon_social_cliente,
        totalBultos,
        cantidadDestinosCotizacion: validacion.cotizaciones.reduce(
          (sum, cotizacion) =>
            sum + (cotizacion.cantidad_destinos_cotizacion || 0),
          0,
        ),
        totalCostoEnvio,
        totalCostoAdicional,
        reciboCotizacion: validacion.cotizaciones[0]?.recibo_cotizacion,
        precioTotalCotizacion:
          validacion.cotizaciones[0]?.precio_total_cotizacion,
      };
    });
  }
}

// Ejecutar la función para exportar las validaciones
const exportarValidationService = new ExportarValidationService();
exportarValidationService
  .exportarValidaciones()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
