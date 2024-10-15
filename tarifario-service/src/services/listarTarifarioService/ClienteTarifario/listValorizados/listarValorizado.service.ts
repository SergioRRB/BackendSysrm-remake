import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TarifarioClienteValorizadoService = {
  async valorizados(id_cliente: number, id_area: number) {
    const tarifarioClienteValorizado =
      await prisma.tarifarios_clientes_valorizados.findMany({
        where: {
          id_cliente_tarifario_cliente_valorizado: id_cliente,
          id_area_tarifario_cliente_valorizado: id_area,
        },
        select: {
          id: true,
          id_cliente_tarifario_cliente_valorizado: true,
          producto_tarifario_cliente_valorizado: true,
          costo_producto_tarifario_cliente_valorizado: true,
          tmin_tarifario_cliente_valorizado: true,
          tmax_tarifario_cliente_valorizado: true,
          id_creador_tarifario_cliente_valorizado: true,
          fecha_creado: true,
          // Relación con "ubigeo"
          ubigeo: {
            select: {
              UBIGEO: true,
              DEPARTAMENTO: true,
              PROVINCIA: true,
              DESTINO: true,
              Zona: true,
            },
          },
          // Relación con "clientes"
          cliente: {
            select: {
              razon_social_cliente: true,
            },
          },
          // Relación con "areas"
          area: {
            select: {
              nombre_area: true,
            },
          },
        },
        orderBy: {id: "desc",},
      });
    return tarifarioClienteValorizado;
  },
};
