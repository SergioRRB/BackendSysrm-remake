import { PrismaClient } from "@prisma/client";
import { ClienteValorizadoDto } from "../../../../dtos/importarTarifarioDto/importarCliente.dto";

const prisma = new PrismaClient();

export class ImportarClienteValorizadoService {
  async insertClientesValorizados(
    data_ClientesValorizados: ClienteValorizadoDto[],
    idCliente: number,
    idArea: number,
    idUser: number,
  ) {
    // Eliminar los datos existentes
    await prisma.tarifarios_clientes_valorizados.deleteMany({
      where: { id_cliente_tarifario_cliente_valorizado: idCliente },
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

    // Insertar los nuevos registros
    for (const element of data_ClientesValorizados) {
      const newTarifa = {
        id_cliente_tarifario_cliente_valorizado: cliente.id,
        id_area_tarifario_cliente_valorizado: area.id,
        ubigeo_tarifario_cliente_valorizado:
          element.ubigeo_tarifario_cliente_valorizado,
        producto_tarifario_cliente_valorizado:
          element.producto_tarifario_cliente_valorizado,
        costo_producto_tarifario_cliente_valorizado:
          element.costo_producto_tarifario_cliente_valorizado,
        tmin_tarifario_cliente_valorizado:
          element.tmin_tarifario_cliente_valorizado,
        tmax_tarifario_cliente_valorizado:
          element.tmax_tarifario_cliente_valorizado,
        id_creador_tarifario_cliente_valorizado: idUser,
        fecha_creado: new Date(),
      };
      await prisma.tarifarios_clientes_valorizados.create({
        data: newTarifa,
      });
    }
  }
}
