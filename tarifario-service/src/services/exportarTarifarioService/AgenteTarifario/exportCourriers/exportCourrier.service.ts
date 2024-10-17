import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExportarTarifarioAgenteCourrierService = {
  async courrier(id_agente: number) {
    const expAgenteCourrier =
      await prisma.tarifarios_agentes_courriers.findMany({
        where: {
          id_agente_tarifario_agente_courrier: id_agente,
        },
        select: {
          kg_tarifario_agente_courrier: true,
          kg_adicional_tarifario_agente_courrier: true,
          tmin_tarifario_agente_courrier: true,
          tmax_tarifario_agente_courrier: true,
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

    return expAgenteCourrier;
  },
};
