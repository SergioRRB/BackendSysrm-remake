import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const TarifarioClienteService = {
  async aereo(id: number) {
    const tarifarioCliente = await prisma.tarifarios_clientes_aereos.findMany({
      where: {
        id_area_tarifario_cliente_aereo: id,
        kg_tarifario_cliente_aereo: { gt: 0 }, // Cambiar a kg_tarifario_cliente_aereo
      },
      select: {
        id: true, // Asegúrate de seleccionar el campo que necesitas
        kg_tarifario_cliente_aereo: true, // Este campo debe existir en tu modelo
        kg_adicional_tarifario_cliente_aereo: true, // Este campo debe existir en tu modelo
        tmin_tarifario_cliente_aereo: true,
        tmax_tarifario_cliente_aereo: true,
        ubigeo: {
          select: {
            UBIGEO: true,
            Zona: true,
            DEPARTAMENTO: true,
            PROVINCIA: true,
            DESTINO: true,
          },
        },
      },
    });

    return tarifarioCliente;
  },

  // ...otros métodos
};
