import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ExportarTarifarioTransportistaCourrierService = {
  async transportistaCourrier(id_transportista: number) {
    // Realizamos la consulta a la tabla 'tarifarios_transportistas_courriers'
    const expTransportistaCourrier =
      await prisma.tarifarios_transportistas_courriers.findMany({
        where: {
          id_transportista_tarifario_transportista_courrier: id_transportista,
        },
        select: {
          kg_tarifario_transportista_courrier: true,
          kg_adicional_tarifario_transportista_courrier: true,
          tmin_tarifario_transportista_courrier: true,
          tmax_tarifario_transportista_courrier: true,
          ubigeo: {
            select: {
              DEPARTAMENTO: true,
              PROVINCIA: true,
              DESTINO: true,
            },
          },
          proveedor: {
            select: {
              id: true, // Cambia esto según lo que necesites
              // Puedes agregar otros campos que quieras seleccionar
            },
          },
        },
        orderBy: {
          id: "desc", // Ordenamos por ID descendente
        },
      });

    // Formateamos el resultado para que coincida con los nombres de las columnas de la consulta SQL
    return expTransportistaCourrier.map((item) => ({
      Departamento: item.ubigeo?.DEPARTAMENTO,
      Provincia: item.ubigeo?.PROVINCIA,
      Distrito: item.ubigeo?.DESTINO,
      KG: item.kg_tarifario_transportista_courrier,
      "KG Adicional": item.kg_adicional_tarifario_transportista_courrier,
      "T.Min Entrega": item.tmin_tarifario_transportista_courrier,
      "T.Max Entrega": item.tmax_tarifario_transportista_courrier,
    }));
  },
};
