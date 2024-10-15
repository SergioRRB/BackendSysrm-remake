import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TarifarioClienteCourrierService = {
  async courrier(id_cliente: number, id_area: number) {
    const tarifarioClienteCourrier =
      await prisma.tarifarios_clientes_courriers.findMany({
        where: {
          id_cliente_tarifario_cliente_courrier: id_cliente,
          id_area_tarifario_cliente_courrier: id_area,
        },
        select: {
          id: true,
          kg_tarifario_cliente_courrier: true,
          kg_adicional_tarifario_cliente_courrier: true,
          tmin_tarifario_cliente_courrier: true,
          tmax_tarifario_cliente_courrier: true,
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
        orderBy: {id: "desc",},
      });

    return tarifarioClienteCourrier;
  },
};
