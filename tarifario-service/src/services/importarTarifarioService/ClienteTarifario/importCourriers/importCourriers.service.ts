import { PrismaClient } from "@prisma/client";
import { ClienteCourrierDto } from "../../../../dtos/importarTarifarioDto/importarCliente.dto";

const prisma = new PrismaClient();

export class ImportarClienteCourrierService {
  async insertClientesCourriers(
    data_ClientesCourriers: ClienteCourrierDto[],
    idCliente: number,
    idArea: number,
    idUser: number,
  ) {
    // Eliminar los datos existentes
    await prisma.tarifarios_clientes_courriers.deleteMany({
      where: { id_cliente_tarifario_cliente_courrier: idCliente },
    });

    // Verificar existencia del cliente y área
    const cliente = await prisma.clientes.findUnique({
      where: { id: idCliente },
    });
    const area = await prisma.areas.findUnique({
      where: { id: idArea },
    });

    if (!cliente) throw new Error("El cliente no existe");
    if (!area) throw new Error("El área no existe");

    // Obtener ubigeos
    const ubigeos = await prisma.ubigeo.findMany();

    // Insertar los nuevos registros
    for (const element of data_ClientesCourriers) {
      const newTarifa = {
        id_cliente_tarifario_cliente_courrier: cliente.id,
        id_area_tarifario_cliente_courrier: area.id,
        ubigeo_tarifario_cliente_courrier:
          element.ubigeo_tarifario_cliente_courrier,
        kg_tarifario_cliente_courrier: element.kg_tarifario_cliente_courrier,
        kg_adicional_tarifario_cliente_courrier:
          element.kg_adicional_tarifario_cliente_courrier,
        tmin_tarifario_cliente_courrier:
          element.tmin_tarifario_cliente_courrier,
        tmax_tarifario_cliente_courrier:
          element.tmax_tarifario_cliente_courrier,
        id_creador_tarifario_cliente_courrier: idUser,
        fecha_creado: new Date(),
      };
      await prisma.tarifarios_clientes_courriers.create({
        data: newTarifa,
      });
    }
  }
}
