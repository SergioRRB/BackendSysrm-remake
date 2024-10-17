import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExportarTarifarioClienteAereoService = {
  async aereoCliente(id_cliente: number, id_area: number) {
    const expClienteAereo = await prisma.tarifarios_clientes_aereos.findMany({
      where: {
        id_cliente_tarifario_cliente_aereo: id_cliente,
        id_area_tarifario_cliente_aereo: id_area,
      },
      select: {
        kg_tarifario_cliente_aereo: true,
        kg_adicional_tarifario_cliente_aereo: true,
        tmin_tarifario_cliente_aereo: true,
        tmax_tarifario_cliente_aereo: true,
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

    return expClienteAereo.map((item) => ({
      Departamento: item.ubigeo?.DEPARTAMENTO,
      Provincia: item.ubigeo?.PROVINCIA,
      Distrito: item.ubigeo?.DESTINO,
      KG: item.kg_tarifario_cliente_aereo,
      "KG Adicional": item.kg_adicional_tarifario_cliente_aereo,
      "T.Min Entrega": item.tmin_tarifario_cliente_aereo,
      "T.Max Entrega": item.tmax_tarifario_cliente_aereo,
    }));
  },
};
