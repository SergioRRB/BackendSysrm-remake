import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExportarTarifarioClienteValorizadoService = {
  async valorizadoCliente(id_cliente: number, id_area: number) {
    const expClienteValorizado =
      await prisma.tarifarios_clientes_valorizados.findMany({
        where: {
          id_cliente_tarifario_cliente_valorizado: id_cliente,
          id_area_tarifario_cliente_valorizado: id_area,
        },
        select: {
          producto_tarifario_cliente_valorizado: true,
          costo_producto_tarifario_cliente_valorizado: true,
          tmin_tarifario_cliente_valorizado: true,
          tmax_tarifario_cliente_valorizado: true,
          ubigeo: {
            select: {
              DEPARTAMENTO: true,
              PROVINCIA: true,
              DESTINO: true,
            },
          },
          area: {
            select: {
              id: true, 
            },
          },
          cliente: {
            select: {
              id: true, 
            },
          },
        },
        orderBy: {
          id: "desc",
        },
      });

    return expClienteValorizado.map((item) => ({
      Departamento: item.ubigeo?.DEPARTAMENTO,
      Provincia: item.ubigeo?.PROVINCIA,
      Distrito: item.ubigeo?.DESTINO,
      Producto: item.producto_tarifario_cliente_valorizado,
      "S/ Producto": item.costo_producto_tarifario_cliente_valorizado,
      "T.Min Entrega": item.tmin_tarifario_cliente_valorizado,
      "T.Max Entrega": item.tmax_tarifario_cliente_valorizado,
    }));
  },
};
