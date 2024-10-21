import { PrismaClient } from '@prisma/client';
import { ClienteAereoDto } from '../../../../dtos/importarTarifarioDto/importarCliente.dto';

const prisma = new PrismaClient();

export class ImportarClienteAereoService {
  async insertClientesAereos(data_ClientesAereos: ClienteAereoDto[], idCliente: number, idArea: number, idUser: number) {
    // Eliminar los datos existentes
    await prisma.tarifarios_clientes_aereos.deleteMany({
      where: { id_cliente_tarifario_cliente_aereo: idCliente },
    });

    // Verificar existencia del cliente y área
    const cliente = await prisma.clientes.findUnique({
      where: { id: idCliente },
    });
    const area = await prisma.areas.findUnique({
      where: { id: idArea },
    });
    
    if (!cliente) throw new Error('El cliente no existe');
    if (!area) throw new Error('El área no existe');

    // Obtener ubigeos
    const ubigeos = await prisma.ubigeo.findMany();

    // Insertar los nuevos registros
    for (const element of data_ClientesAereos) {
      const newTarifa = {
        id_cliente_tarifario_cliente_aereo: cliente.id,
        id_area_tarifario_cliente_aereo: area.id,
        ubigeo_tarifario_cliente_aereo: element.ubigeo_tarifario_cliente_aereo,
        kg_tarifario_cliente_aereo: element.kg_tarifario_cliente_aereo,
        kg_adicional_tarifario_cliente_aereo: element.kg_adicional_tarifario_cliente_aereo,
        tmin_tarifario_cliente_aereo: element.tmin_tarifario_cliente_aereo,
        tmax_tarifario_cliente_aereo: element.tmax_tarifario_cliente_aereo,
        id_creador_tarifario_cliente_aereo: idUser,
        fecha_creado: new Date(),
      };
      await prisma.tarifarios_clientes_aereos.create({
        data: newTarifa,
      });
    }
  }
}
