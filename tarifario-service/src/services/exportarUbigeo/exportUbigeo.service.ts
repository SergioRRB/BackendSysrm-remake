// src/services/exportarUbigeo/exportarUbigeoService.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const exportarUbigeo = async () => {
  try {
    const ubigeos = await prisma.ubigeo.findMany({
      select: {
        DEPARTAMENTO: true,
        PROVINCIA: true,
        DESTINO: true,
      },
    });
    return ubigeos;
  } catch (error) {
    console.error("Error al exportar los datos de ubigeo:", error);
    throw error;
  }
};
