import { PrismaClient } from '@prisma/client';
import { ClienteCargaDto } from '../../../../dtos/importarTarifarioDto/importarCliente.dto';

const prisma = new PrismaClient();

export class ImportarClienteCargaService {
  async insertClientesCargas(data_ClientesCargas: ClienteCargaDto[], idCliente: number, idArea: number, idUser: number) {
    await prisma.tarifarios_clientes_cargas.deleteMany({
      where: { id_cliente_tarifario_cliente_carga: idCliente },
    });

    const cliente = await prisma.clientes.findUnique({
      where: { id: idCliente },
    });
    const area = await prisma.areas.findUnique({
      where: { id: idArea },
    });

    if (!cliente) throw new Error('El cliente no existe');
    if (!area) throw new Error('El área no existe');

    const ubigeos = await prisma.ubigeo.findMany();

    for (const element of data_ClientesCargas) {
      const newTarifa = {
        id_cliente_tarifario_cliente_carga: cliente.id,
        id_area_tarifario_cliente_carga: area.id,
        ubigeo_tarifario_cliente_carga: element.ubigeo_tarifario_cliente_carga,
        kg_maximo_tarifario_cliente_carga: element.kg_maximo_tarifario_cliente_carga,
        kg_base_adicional_tarifario_cliente_carga: element.kg_base_adicional_tarifario_cliente_carga,
        paquete_tarifario_cliente_carga: element.paquete_tarifario_cliente_carga,
        tmin_tarifario_cliente_carga: element.tmin_tarifario_cliente_carga,
        tmax_tarifario_cliente_carga: element.tmax_tarifario_cliente_carga,
        id_creador_tarifario_cliente_carga: idUser,
        fecha_creado: new Date(),
      };
      await prisma.tarifarios_clientes_cargas.create({
        data: newTarifa,
      });
    }
  }
}
