// src/services/Validacion/Validaciones.service.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ValidacionesService {
  static async obtenerDetallesValidaciones() {
    const query = `
      SELECT
        validaciones.id,
        validaciones.fecha_creado,
        usuarios.colaborador_usuario,
        validaciones.id_orden_servicio_validacion,
        clientes.razon_social_cliente,
        SUM(COALESCE(cotizaciones_destinos.cantidad_mercancia_cotizacion_destino, 0) + COALESCE(punto_ventas_destinos.cantidad_mercancia_punto_venta_destino, 0)) AS total_bultos,
        COALESCE(cotizaciones.cantidad_destinos_cotizacion, 0) + COALESCE(punto_ventas.cantidad_destinos_punto_venta, 0) AS cantidad_destinos_cotizacion,
        SUM(COALESCE(cotizaciones_destinos.total_tarifa_cotizacion_destino, 0) + COALESCE(punto_ventas_destinos.total_tarifa_punto_venta_destino, 0)) AS total_costo_envio,
        SUM(COALESCE(cotizaciones_destinos.total_adicional_cotizacion_destino, 0) + COALESCE(punto_ventas_destinos.total_adicional_punto_venta_destino, 0)) AS total_costo_adicional,
        CASE
          WHEN cotizaciones.recibo_cotizacion IS NOT NULL AND punto_ventas.recibo_punto_venta IS NOT NULL THEN CONCAT(cotizaciones.recibo_cotizacion, ', ', punto_ventas.recibo_punto_venta)
          WHEN cotizaciones.recibo_cotizacion IS NOT NULL THEN cotizaciones.recibo_cotizacion
          WHEN punto_ventas.recibo_punto_venta IS NOT NULL THEN punto_ventas.recibo_punto_venta
          ELSE NULL
        END AS recibo_cotizacion,
        COALESCE(cotizaciones.precio_total_cotizacion, 0) + COALESCE(punto_ventas.precio_total_punto_venta, 0) AS precio_total_cotizacion,
        validaciones.estado_validacion
      FROM validaciones
      LEFT JOIN cotizaciones ON validaciones.id_orden_servicio_validacion = cotizaciones.id_cotizacion
      LEFT JOIN cotizaciones_destinos ON cotizaciones.id_cotizacion = cotizaciones_destinos.id_cotizacion_cotizacion_destino
      LEFT JOIN punto_ventas ON validaciones.id_orden_servicio_validacion = punto_ventas.id_punto_venta
      LEFT JOIN punto_ventas_destinos ON punto_ventas.id_punto_venta = punto_ventas_destinos.id_punto_venta_destino
      LEFT JOIN usuarios ON validaciones.id_accion_validacion = usuarios.id
      LEFT JOIN clientes ON (cotizaciones.id_cliente_cotizacion = clientes.id OR punto_ventas.id_cliente_punto_venta = clientes.id)
      WHERE id_orden_servicio_validacion NOT LIKE 'OS%'
      GROUP BY
        validaciones.id_orden_servicio_validacion,
        clientes.razon_social_cliente,
        usuarios.colaborador_usuario,
        cantidad_destinos_cotizacion,
        recibo_cotizacion,
        precio_total_cotizacion
      ORDER BY validaciones.id DESC
    `;

    // Ejecutar la consulta en bruto
    return await prisma.$queryRawUnsafe(query);
  }
}
