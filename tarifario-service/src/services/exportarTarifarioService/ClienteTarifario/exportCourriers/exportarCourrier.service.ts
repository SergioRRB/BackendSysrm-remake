import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExportarTarifarioClienteCourrierService = {
  async courrierCliente(id_cliente: number, id_area: number) {
    const tarifarioCourrier =
      await prisma.tarifarios_clientes_courriers.findMany({
        where: {
          id_cliente_tarifario_cliente_courrier: id_cliente,
          id_area_tarifario_cliente_courrier: id_area,
        },
        select: {
          kg_tarifario_cliente_courrier: true,
          kg_adicional_tarifario_cliente_courrier: true,
          tmin_tarifario_cliente_courrier: true,
          tmax_tarifario_cliente_courrier: true,
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

    // Mapeo de resultados
    return tarifarioCourrier.map((item) => ({
      Departamento: item.ubigeo?.DEPARTAMENTO,
      Provincia: item.ubigeo?.PROVINCIA,
      Distrito: item.ubigeo?.DESTINO,
      KG: item.kg_tarifario_cliente_courrier,
      "KG Adicional": item.kg_adicional_tarifario_cliente_courrier,
      "T.Min Entrega": item.tmin_tarifario_cliente_courrier,
      "T.Max Entrega": item.tmax_tarifario_cliente_courrier,
    }));
  },
};
