import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExportarTarifarioClienteCargaService = {
  async cargaCliente(id_cliente: number, id_area: number) {
    const expClienteCarga = await prisma.tarifarios_clientes_cargas.findMany({
      where: {
        id_cliente_tarifario_cliente_carga: id_cliente,
        id_area_tarifario_cliente_carga: id_area,
      },
      select: {
        kg_maximo_tarifario_cliente_carga: true,
        kg_base_adicional_tarifario_cliente_carga: true,
        paquete_tarifario_cliente_carga: true,
        tmin_tarifario_cliente_carga: true,
        tmax_tarifario_cliente_carga: true,
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

    return expClienteCarga.map((item) => ({
      Departamento: item.ubigeo?.DEPARTAMENTO,
      Provincia: item.ubigeo?.PROVINCIA,
      Distrito: item.ubigeo?.DESTINO,
      "KG Maximo": item.kg_maximo_tarifario_cliente_carga,
      "KG Base": item.kg_base_adicional_tarifario_cliente_carga,
      Paquete: item.paquete_tarifario_cliente_carga,
      "T.Min Entrega": item.tmin_tarifario_cliente_carga,
      "T.Max Entrega": item.tmax_tarifario_cliente_carga,
    }));
  },
};
