import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TarifarioClienteCargaService = {
  async carga(id_cliente: number, id_area: number) {
    const tarifarioClienteCarga =
      await prisma.tarifarios_clientes_cargas.findMany({
        where: {
          id_cliente_tarifario_cliente_carga: id_cliente,
          id_area_tarifario_cliente_carga: id_area,
        },
        select: {
          id: true,
          kg_maximo_tarifario_cliente_carga: true,
          kg_base_adicional_tarifario_cliente_carga: true,
          paquete_tarifario_cliente_carga: true,
          tmin_tarifario_cliente_carga: true,
          tmax_tarifario_cliente_carga: true,
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

    return tarifarioClienteCarga;
  },
};
