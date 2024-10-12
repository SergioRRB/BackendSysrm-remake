import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TarifarioAgenteAereoService = {
  async aereo(id_agente: number) {
    const tarifarioAgenteAereo =
      await prisma.tarifarios_agentes_aereos.findMany({
        where: {
          id_agente_tarifario_agente_aereo: id_agente,
        },
        select: {
          id: true,
          ubigeo_tarifario_agente_aereo: true,
          kg_tarifario_agente_aereo: true,
          kg_adicional_tarifario_agente_aereo: true,
          tmin_tarifario_agente_aereo: true,
          tmax_tarifario_agente_aereo: true,
          id_creador_tarifario_agente_aereo: true,
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

    return tarifarioAgenteAereo;
  },
};
