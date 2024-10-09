import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listarTarifarioService = {
  async aereo(id: number) {
    return await prisma.tarifarios_clientes_aereos.findMany({
      where: {
        id_area_tarifario_cliente_aereo: id,
        kg_tarifario_cliente_aereo: {
          gt: 0,
        },
      },
      include: {
        ubigeo: true, // Suponiendo que tienes la relación en tu modelo
      },
    });
  },
  async carga(id: number) {
    return await prisma.tarifarios_clientes_cargas.findMany({
      where: {
        id_area_tarifario_cliente_carga: id,
        kg_base_adicional_tarifario_cliente_carga: {
          gt: 0,
        },
      },
      include: {
        ubigeo: true, // Suponiendo que tienes la relación en tu modelo
      },
    });
  },
  async courier(id: number) {
    return await prisma.tarifarios_clientes_courriers.findMany({
      where: {
        id_area_tarifario_cliente_courrier: id,
        kg_tarifario_cliente_courrier: {
          gt: 0,
        },
      },
      include: {
        ubigeo: true, // Suponiendo que tienes la relación en tu modelo
      },
    });
  },
  async inverso(id: number) {
    return await prisma.tarifarios_clientes_valorizados.findMany({
      where: {
        id_area_tarifario_cliente_valorizado: id,
        // Puedes añadir más condiciones aquí según sea necesario
      },
      include: {
        ubigeo: true, // Suponiendo que tienes la relación en tu modelo
      },
    });
  },
  async transito(id: number) {
    return await prisma.tarifarios_transportistas_cargas.findMany({
      where: {
        // Aquí puedes agregar las condiciones correspondientes
      },
      include: {
        ubigeo: true, // Suponiendo que tienes la relación en tu modelo
      },
    });
  },
  async valorizado(id: number) {
    return await prisma.tarifarios_clientes_valorizados.findMany({
      where: {
        id_area_tarifario_cliente_valorizado: id,
        // Puedes añadir más condiciones aquí según sea necesario
      },
      include: {
        ubigeo: true, // Suponiendo que tienes la relación en tu modelo
      },
    });
  },
};

export default listarTarifarioService;
