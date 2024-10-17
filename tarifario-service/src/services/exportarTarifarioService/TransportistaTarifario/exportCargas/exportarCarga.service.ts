import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExportarTarifarioTransportistaCargaService = {
  async transportistaCarga(id_transportista: number) {
    const expTransportistaCarga =
      await prisma.tarifarios_transportistas_cargas.findMany({
        where: {
          id_transportista_tarifario_transportista_carga: id_transportista,
        },
        select: {
          kg_maximo_tarifario_transportista_carga: true,
          kg_base_adicional_tarifario_transportista_carga: true,
          paquete_tarifario_transportista_carga: true,
          tmin_tarifario_transportista_carga: true,
          tmax_tarifario_transportista_carga: true,
          ubigeo: {
            select: {
              DEPARTAMENTO: true,
              PROVINCIA: true,
              DESTINO: true,
            },
          },
          proveedor: {
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
    return expTransportistaCarga.map((item) => ({
      Departamento: item.ubigeo?.DEPARTAMENTO,
      Provincia: item.ubigeo?.PROVINCIA,
      Distrito: item.ubigeo?.DESTINO,
      "KG Maximo": item.kg_maximo_tarifario_transportista_carga,
      "KG Base": item.kg_base_adicional_tarifario_transportista_carga,
      Paquete: item.paquete_tarifario_transportista_carga,
      "T.Min Entrega": item.tmin_tarifario_transportista_carga,
      "T.Max Entrega": item.tmax_tarifario_transportista_carga,
    }));
  },
};
