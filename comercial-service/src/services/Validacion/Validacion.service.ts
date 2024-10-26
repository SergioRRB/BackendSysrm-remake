import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ValidacionService {
  async getValidaciones() {
    const validaciones = await prisma.validaciones.findMany({
      where: {
        id_orden_servicio_validacion: {
          not: {
            startsWith: "OS",
          },
        },
      },
      include: {
        usuarios: {
          select: {
            colaborador_usuario: true,
          },
        },
        cotizaciones: {
          include: {
            cliente: {
              select: { razon_social_cliente: true },
            },
            cotizacionesDestinos: true,
          },
        },
        puntoVentas: {
          include: {
            cliente: {
              select: { razon_social_cliente: true },
            },
            puntoVentasDestinos: true,
          },
        },
      },
    });

    return validaciones.map((validacion) => {
      const totalBultos = validacion.cotizaciones.reduce((sum, cot) => {
        return (
          sum +
          cot.cotizacionesDestinos.reduce(
            (subSum, dest) =>
              subSum + dest.cantidad_mercancia_cotizacion_destino,
            0,
          )
        );
      }, 0);

      const totalCostoEnvio = validacion.cotizaciones.reduce((sum, cot) => {
        return (
          sum +
          cot.cotizacionesDestinos.reduce(
            (subSum, dest) => subSum + Number(dest.total_tarifa_cotizacion_destino),
            0,
          )
        );
      }, 0);

      const totalCostoAdicional = validacion.cotizaciones.reduce((sum, cot) => {
        return (
          sum +
          cot.cotizacionesDestinos.reduce(
            (subSum, dest) => subSum + Number(dest.total_adicional_cotizacion_destino),
            0,
          )
        );
      }, 0);

      const reciboCotizacion =
        validacion.cotizaciones
          .map((cot) => cot.recibo_cotizacion)
          .filter((recibo) => recibo)
          .join(", ") ||
        validacion.puntoVentas
          .map((pv) => pv.recibo_punto_venta)
          .filter((recibo) => recibo)
          .join(", ");

      return {
        id: validacion.id,
        fecha_creado: validacion.fecha_creado,
        colaborador_usuario: validacion.usuarios?.colaborador_usuario,
        id_orden_servicio_validacion: validacion.id_orden_servicio_validacion,
        razon_social_cliente: validacion.cotizaciones[0]?.cliente?.razon_social_cliente ?? null, 
        total_bultos: totalBultos,
        total_costo_envio: totalCostoEnvio,
        total_costo_adicional: totalCostoAdicional,
        recibo_cotizacion: reciboCotizacion,
        precio_total_cotizacion: validacion.cotizaciones.reduce(
          (sum, cot) => sum + cot.precio_total_cotizacion.toNumber(),
          0,
        ),         
        estado_validacion: validacion.estado_validacion,
      };
    });
  }
}

export default new ValidacionService();
