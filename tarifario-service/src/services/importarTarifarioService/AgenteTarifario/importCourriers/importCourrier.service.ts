// src/services/courrierService.ts

import { PrismaClient } from '@prisma/client';
import { AgenteCourrierDto } from '../../../../dtos/importarTarifarioDto/importarAgente.dto';

const prisma = new PrismaClient();

export class ImportarAgenteCourrierService {
  async insertCourrier(data_AgenteCourrier: AgenteCourrierDto[], idArea: number, idUser: number) {
    // Eliminar la tabla existente
    await prisma.tarifarios_agentes_courriers.deleteMany({
      where: { id_agente_tarifario_agente_courrier: idArea },
    });

    // Verificar existencia del área
    const area = await prisma.areas.findUnique({
      where: { id: idArea },
    });
    if (!area) throw new Error('El área no existe');

    // Insertar los nuevos registros
    for (const element of data_AgenteCourrier) {
      const newTarifa = {
        id_agente_tarifario_agente_courrier: area.id,
        ubigeo_tarifario_agente_courrier: element.ubigeo_tarifario_agente_courrier,
        kg_tarifario_agente_courrier: element.kg_tarifario_agente_courrier,
        kg_adicional_tarifario_agente_courrier: element.kg_adicional_tarifario_agente_courrier,
        tmin_tarifario_agente_courrier: element.tmin_tarifario_agente_courrier,
        tmax_tarifario_agente_courrier: element.tmax_tarifario_agente_courrier,
        id_creador_tarifario_agente_courrier: idUser,
        fecha_creado: new Date(),
      };
      await prisma.tarifarios_agentes_courriers.create({
        data: newTarifa,
      });
    }
  }
}
