import { PrismaClient } from "@prisma/client";
import { Decimal } from "decimal.js"; // Ensure you import Decimal if needed

const prisma = new PrismaClient();

export class ExportarValidationService {
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
                ? destino.total_tarifa_cotizacion_destino.toNumber() // Convert to number
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
                ? destino.total_adicional_cotizacion_destino.toNumber() // Convert to number
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
