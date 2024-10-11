import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TarifarioClienteService = {
  async aereo(id_cliente: number, id_area: number) {
    const tarifarioCliente = await prisma.tarifarios_clientes_aereos.findMany({
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

    return tarifarioCliente;
  },

  async carga(id_cliente: number, id_area: number) {
    const tarifarioCliente = await prisma.tarifarios_clientes_cargas.findMany({
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
      orderBy: {
        id: "desc",
      },
    });

    return tarifarioCliente;
  },

  async courrier(id_cliente: number, id_area: number) {
    const tarifarioCliente =
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
        orderBy: {
          id: "desc",
        },
      });

    return tarifarioCliente;
  },

  async valorizados(id_cliente: number, id_area: number) {
    const tarifarioClienteValorizado =
      await prisma.tarifarios_clientes_valorizados.findMany({
        where: {
          id_cliente_tarifario_cliente_valorizado: id_cliente,
          id_area_tarifario_cliente_valorizado: id_area,
        },
        select: {
          id: true,
          id_cliente_tarifario_cliente_valorizado: true,
          producto_tarifario_cliente_valorizado: true,
          costo_producto_tarifario_cliente_valorizado: true,
          tmin_tarifario_cliente_valorizado: true,
          tmax_tarifario_cliente_valorizado: true,
          id_creador_tarifario_cliente_valorizado: true,
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
          // Relación con "clientes"
          cliente: {
            select: {
              razon_social_cliente: true,
            },
          },
          // Relación con "areas"
          area: {
            select: {
              nombre_area: true,
            },
          },
        },
        orderBy: {
          id: "desc",
        },
      });

    return tarifarioClienteValorizado;
  },
};
