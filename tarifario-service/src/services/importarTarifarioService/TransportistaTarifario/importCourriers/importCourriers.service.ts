import { PrismaClient } from "@prisma/client";
import { TransportistaCourrierDto } from "../../../../dtos/importarTarifarioDto/importarTransportista.dto";

const prisma = new PrismaClient();

export class ImportarTransportistaCourrierService {
  async insertTransportistasCourriers(
    data_TransportistasCourriers: TransportistaCourrierDto[],
    idTransportista: number,
    idUser: number,
  ) {
    // Eliminar los datos existentes
    await prisma.tarifarios_transportistas_courriers.deleteMany({
      where: {
        id_transportista_tarifario_transportista_courrier: idTransportista,
      },
    });

    // Verificar existencia del transportista
    const transportista = await prisma.proveedores.findUnique({
      where: { id: idTransportista },
    });

    if (!transportista) throw new Error("El transportista no existe");

    // Insertar los nuevos registros
    for (const element of data_TransportistasCourriers) {
      const newTarifa = {
        id_transportista_tarifario_transportista_courrier: transportista.id,
        ubigeo_tarifario_transportista_courrier:
          element.ubigeo_tarifario_transportista_courrier,
        kg_tarifario_transportista_courrier:
          element.kg_tarifario_transportista_courrier,
        kg_adicional_tarifario_transportista_courrier:
          element.kg_adicional_tarifario_transportista_courrier,
        tmin_tarifario_transportista_courrier:
          element.tmin_tarifario_transportista_courrier,
        tmax_tarifario_transportista_courrier:
          element.tmax_tarifario_transportista_courrier,
        id_creador_tarifario_transportista_courrier: idUser,
        fecha_creado: new Date(),
      };
      await prisma.tarifarios_transportistas_courriers.create({
        data: newTarifa,
      });
    }
  }
}
