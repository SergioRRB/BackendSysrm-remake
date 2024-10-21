import { PrismaClient } from "@prisma/client";
import { TransportistaCargaDto } from "../../../../dtos/importarTarifarioDto/importarTransportista.dto";

const prisma = new PrismaClient();

export class ImportarTransportistaCargaService {
  async insertTransportistasCargas(
    data_TransportistasCargas: TransportistaCargaDto[],
    idTransportista: number,
    idUser: number,
  ) {
    // Eliminar los datos existentes
    await prisma.tarifarios_transportistas_cargas.deleteMany({
      where: {
        id_transportista_tarifario_transportista_carga: idTransportista,
      },
    });

    // Verificar existencia del transportista
    const transportista = await prisma.proveedores.findUnique({
      where: { id: idTransportista },
    });

    if (!transportista) throw new Error("El transportista no existe");

    // Insertar los nuevos registros
    for (const element of data_TransportistasCargas) {
      const newTarifa = {
        id_transportista_tarifario_transportista_carga: transportista.id,
        ubigeo_tarifario_transportista_carga:
          element.ubigeo_tarifario_transportista_carga,
        kg_maximo_tarifario_transportista_carga:
          element.kg_maximo_tarifario_transportista_carga,
        kg_base_adicional_tarifario_transportista_carga:
          element.kg_base_adicional_tarifario_transportista_carga,
        paquete_tarifario_transportista_carga:
          element.paquete_tarifario_transportista_carga,
        tmin_tarifario_transportista_carga:
          element.tmin_tarifario_transportista_carga,
        tmax_tarifario_transportista_carga:
          element.tmax_tarifario_transportista_carga,
        id_creador_tarifario_transportista_carga: idUser,
        fecha_creado: new Date(),
      };
      await prisma.tarifarios_transportistas_cargas.create({
        data: newTarifa,
      });
    }
  }
}
