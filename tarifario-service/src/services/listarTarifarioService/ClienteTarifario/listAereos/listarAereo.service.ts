import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TarifarioClienteAereoService = {
  async aereo(id_cliente: number, id_area: number) {
    const tarifarioClienteAereo =
      await prisma.tarifarios_clientes_aereos.findMany({
        where: {
          id_cliente_tarifario_cliente_aereo: id_cliente,
          id_area_tarifario_cliente_aereo: id_area,
        },
        select: {
          id: true,
          kg_tarifario_cliente_aereo: true,
          kg_adicional_tarifario_cliente_aereo: true,
          tmin_tarifario_cliente_aereo: true,
          tmax_tarifario_cliente_aereo: true,
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
          // Relación con "areas"
          area: {
            select: {
              nombre_area: true,
            },
          },
          // Relación con "clientes"
          cliente: {
            select: {
              razon_social_cliente: true,
            },
          },
        },
        orderBy: {
          id: "desc",
        },
      });

    return tarifarioClienteAereo;
  },
};
