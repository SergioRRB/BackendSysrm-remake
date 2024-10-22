import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class SelectionTarifarioService {
  async obtenerTarifarioUbigeo(
    id_cliente: number,
    id_area: number,
    ubigeo: number,
    tarifario: string,
  ) {
    let result;

    if (tarifario === "Courrier") {
      result = await prisma.tarifarios_clientes_courriers.findMany({
        where: {
          ubigeo_tarifario_cliente_courrier: ubigeo,
          id_cliente_tarifario_cliente_courrier: id_cliente,
          id_area_tarifario_cliente_courrier: id_area,
        },
        orderBy: {
          id: "desc",
        },
        select: {
          tmin_tarifario_cliente_courrier: true,
          tmax_tarifario_cliente_courrier: true,
        },
      });
    } else if (tarifario === "Aerea") {
      result = await prisma.tarifarios_clientes_aereos.findMany({
        where: {
          ubigeo_tarifario_cliente_aereo: ubigeo,
          id_cliente_tarifario_cliente_aereo: id_cliente,
          id_area_tarifario_cliente_aereo: id_area,
        },
        orderBy: {
          id: "desc",
        },
        select: {
          tmin_tarifario_cliente_aereo: true,
          tmax_tarifario_cliente_aereo: true,
        },
      });
    } else if (tarifario === "Carga") {
      result = await prisma.tarifarios_clientes_cargas.findMany({
        where: {
          ubigeo_tarifario_cliente_carga: ubigeo,
          id_cliente_tarifario_cliente_carga: id_cliente,
          id_area_tarifario_cliente_carga: id_area,
        },
        orderBy: {id: "desc",},
        select: {
          tmin_tarifario_cliente_carga: true,
          tmax_tarifario_cliente_carga: true,
        },
      });
    } else if (tarifario === "Valorizada") {
      result = await prisma.tarifarios_clientes_valorizados.findMany({
        where: {
          ubigeo_tarifario_cliente_valorizado: ubigeo,
          id_cliente_tarifario_cliente_valorizado: id_cliente,
          id_area_tarifario_cliente_valorizado: id_area,
        },
        orderBy: {id: "desc",},
        select: {
          producto_tarifario_cliente_valorizado: true,
          tmin_tarifario_cliente_valorizado: true,
          tmax_tarifario_cliente_valorizado: true,
        },
      });
    }
    return result;
  }
}
