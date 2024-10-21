import { Request, Response } from 'express';
import { ImportarAgenteAereoService } from '../../services/importarTarifarioService/AgenteTarifario/importAereos/importAereo.service';
import { ImportarAgenteCourrierService } from '../../services/importarTarifarioService/AgenteTarifario/importCourriers/importCourrier.service';

const importAgenteAereoService = new ImportarAgenteAereoService();

export class ImportarAgenteAereroController {
  async insertTarifarioAgenteAereo(req: Request, res: Response) {
    const { idArea, idUser } = req.body;
    const data_AgenteAereo = req.body.data_AgenteAereo;

    try {
      await importAgenteAereoService.insertAgenteAereo(data_AgenteAereo, idArea, idUser);
      res.status(200).json({ message: 'Datos insertados correctamente' });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

const importarAgenteCourrierService = new ImportarAgenteCourrierService();

export class ImportartAgenteCourrierController {
  async insertTarifarioAgenteCourrier(req: Request, res: Response) {
    const { idArea, idUser } = req.body;
    const data_AgenteCourrier = req.body.data_AgenteCourrier;

    try {
      await importarAgenteCourrierService.insertCourrier(data_AgenteCourrier, idArea, idUser);
      res.status(200).json({ message: 'Datos insertados correctamente' });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}
