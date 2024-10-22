import { PrismaClient } from '@prisma/client';
import { AgenteAereoDto} from '../../../../dtos/importarTarifarioDto/importarAgente.dto';

const prisma = new PrismaClient();

export class ImportarAgenteAereoService {
  async insertAgenteAereo(data_AgenteAereo: AgenteAereoDto[], idArea: number, idUser: number) {
    // Eliminar la tabla existente
    await prisma.tarifarios_agentes_aereos.deleteMany({
      where: { id_agente_tarifario_agente_aereo: idArea },
    });

    // Verificar existencia del área
    const area = await prisma.areas.findUnique({
      where: { id: idArea },
    });
    if (!area) throw new Error('El área no existe');

    // Obtener ubigeo
    const ubigeos = await prisma.ubigeo.findMany();

    // Insertar los nuevos registros
    for (const element of data_AgenteAereo) {
      const newTarifa = {
        id_agente_tarifario_agente_aereo: area.id,
        ubigeo_tarifario_agente_aereo: element.ubigeo_tarifario_agente_aereo,
        kg_tarifario_agente_aereo: element.kg_tarifario_agente_aereo,
        kg_adicional_tarifario_agente_aereo: element.kg_adicional_tarifario_agente_aereo,
        tmin_tarifario_agente_aereo: element.tmin_tarifario_agente_aereo,
        tmax_tarifario_agente_aereo: element.tmax_tarifario_agente_aereo,
        id_creador_tarifario_agente_aereo: idUser,
        fecha_creado: new Date(),
      };
      await prisma.tarifarios_agentes_aereos.create({
        data: newTarifa,
      });
    }
  }
}
