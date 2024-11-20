import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const obtenerCotizaciones = async () => {
  const cotizaciones = await prisma.cotizaciones.findMany({
    select: {
      id: true,
      id_cotizacion: true,
      cantidad_destinos_cotizacion: true,
      sub_total_cotizacion: true,
      igv_cotizacion: true,
      precio_total_cotizacion: true,
      validacion_cotizacion: true,
      fecha_creado: true,
      cliente: {
        select: {
          razon_social_cliente: true,
          representante_cliente: true,
          telefono_cliente: true,
          email_cliente: true,
        },
      },
      area: {
        select: {
          nombre_area: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });
  return cotizaciones.map((cot) => ({
    ...cot,
    validacion_cotizacion:
      cot.validacion_cotizacion === "0"
        ? "Falta validar"
        : cot.validacion_cotizacion === "1"
          ? "Enviado a validar"
          : "Estado desconocido",
  }));
};
