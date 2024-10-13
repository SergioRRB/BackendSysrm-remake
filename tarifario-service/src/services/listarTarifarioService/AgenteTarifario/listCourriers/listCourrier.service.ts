// src/services/listarTarifarioService/AgenteTarifario/listCourriers/listCourrier.service.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TarifarioAgenteCourrierService = {
  async courrier(id_agente: number) {
    const tarifarioAgenteCourrier =
      await prisma.tarifarios_agentes_courriers.findMany({
        where: {
          id_agente_tarifario_agente_courrier: id_agente,
        },
        select: {
          id: true,
          ubigeo_tarifario_agente_courrier: true,
          kg_tarifario_agente_courrier: true,
          kg_adicional_tarifario_agente_courrier: true,
          tmin_tarifario_agente_courrier: true,
          tmax_tarifario_agente_courrier: true,
          id_creador_tarifario_agente_courrier: true,
          fecha_creado: true,
          // Relación con "ubigeo"
          ubigeo: {
            select: {
              UBIGEO: true,
              DEPARTAMENTO: true,
              PROVINCIA: true,
              DESTINO: true,
              Zona: true, // Asegúrate de que el nombre coincide con el esquema
            },
          },
          // Relación con "proveedores"
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

    return tarifarioAgenteCourrier;
  },
};
