import { Request, Response } from 'express';
import { ImportarAgenteService } from '../../services/importarTarifarioService/AgenteTarifario/importAereo/importAereo.service';

const importAgenteService = new ImportarAgenteService();

export class ImportarAgenteController {
  async insertTarifarioAgenteAereo(req: Request, res: Response) {
    const { idArea, idUser } = req.body;
    const dataAereo = req.body.dataAereo;

    try {
      await importAgenteService.insertAereo(dataAereo, idArea, idUser);
      res.status(200).json({ message: 'Datos insertados correctamente' });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}
