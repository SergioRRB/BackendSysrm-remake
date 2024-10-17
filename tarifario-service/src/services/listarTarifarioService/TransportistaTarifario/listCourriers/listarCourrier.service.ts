import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ListarTarifarioTransportistaCourrierService = {
  async courrier(id_transportista: number) {
    const tarifarioTransportistaCourrier =
      await prisma.tarifarios_transportistas_courriers.findMany({
        where: {
          id_transportista_tarifario_transportista_courrier: id_transportista,
        },
        select: {
          id: true,
          id_transportista_tarifario_transportista_courrier: true,
          kg_tarifario_transportista_courrier: true,
          kg_adicional_tarifario_transportista_courrier: true,
          tmin_tarifario_transportista_courrier: true,
          tmax_tarifario_transportista_courrier: true,
          id_creador_tarifario_transportista_courrier: true,
          fecha_creado: true,
          ubigeo: {
            select: {
              UBIGEO: true,
              DEPARTAMENTO: true,
              PROVINCIA: true,
              DESTINO: true,
              Zona: true,
            },
          },
          proveedor: {
            select: {
              razon_social_proveedor: true,
            },
          },
        },
        orderBy: {
          id: "desc",
        },
      });

    return tarifarioTransportistaCourrier.map((item) => ({
      id: item.id,
      transportista_id: item.id_transportista_tarifario_transportista_courrier,
      razon_social: item.proveedor?.razon_social_proveedor,
      ubigeo: item.ubigeo?.UBIGEO,
      departamento: item.ubigeo?.DEPARTAMENTO,
      provincia: item.ubigeo?.PROVINCIA,
      distrito: item.ubigeo?.DESTINO,
      zona: item.ubigeo?.Zona,
      KG: item.kg_tarifario_transportista_courrier,
      "KG Adicional": item.kg_adicional_tarifario_transportista_courrier,
      "T.Min Entrega": item.tmin_tarifario_transportista_courrier,
      "T.Max Entrega": item.tmax_tarifario_transportista_courrier,
      id_creador: item.id_creador_tarifario_transportista_courrier,
      fecha_creado: item.fecha_creado,
    }));
  },
};
