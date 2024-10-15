// src/services/tarifarioTransportistaCarga.service.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TarifarioTransportistaCargaService = {
  async carga(id_transportista: number) {
    const tarifarioTransportistaCarga =
      await prisma.tarifarios_transportistas_cargas.findMany({
        where: {
          id_transportista_tarifario_transportista_carga: id_transportista,
        },
        select: {
          id: true,
          id_transportista_tarifario_transportista_carga: true,
          kg_maximo_tarifario_transportista_carga: true,
          kg_base_adicional_tarifario_transportista_carga: true,
          paquete_tarifario_transportista_carga: true,
          tmin_tarifario_transportista_carga: true,
          tmax_tarifario_transportista_carga: true,
          fecha_creado: true,
          // Relación con "ubigeo"
          ubigeo: {
            select: {
              UBIGEO: true,
              DEPARTAMENTO: true,
              PROVINCIA: true,
              DESTINO: true,
              Zona: true,
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

    return tarifarioTransportistaCarga;
  },
};
