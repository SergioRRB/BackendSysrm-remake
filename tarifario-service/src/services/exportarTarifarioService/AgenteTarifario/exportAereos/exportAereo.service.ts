//export
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExportarTarifarioAgenteAereoService = {
  async aereo(id_agente: number) {
    const expAgenteAereo = await prisma.tarifarios_agentes_aereos.findMany({
      where: {
        id_agente_tarifario_agente_aereo: id_agente,
      },
      select: {
        kg_tarifario_agente_aereo: true,
        kg_adicional_tarifario_agente_aereo: true,
        tmin_tarifario_agente_aereo: true,
        tmax_tarifario_agente_aereo: true,
        ubigeo: {
          select: {
            DEPARTAMENTO: true,
            PROVINCIA: true,
            DESTINO: true,
          },
        },
        proveedor: {
          select: {
            id: true, // Cambia esto según lo que necesites
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    return expAgenteAereo;
  },
};
