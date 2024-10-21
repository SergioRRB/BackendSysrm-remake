import { Request, Response } from "express";
import { ImportarTransportistaCargaService } from "../../services/importarTarifarioService/TransportistaTarifario/importCargas/importCargas.service";
import { ImportarTransportistaCourrierService } from "../../services/importarTarifarioService/TransportistaTarifario/importCourriers/importCourriers.service";

const importarTransportistaCargaService =
  new ImportarTransportistaCargaService();

export class ImportarTransportistaCargaController {
  async insertTarifarioTransportistaCarga(req: Request, res: Response) {
    const { idTransportista, idUser } = req.body;
    const data_TransportistasCargas = req.body.dataTransportistas;

    try {
      await importarTransportistaCargaService.insertTransportistasCargas(
        data_TransportistasCargas,
        idTransportista,
        idUser,
      );
      res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

const importarTransportistaCourrierService =
  new ImportarTransportistaCourrierService();

export class ImportarTransportistaCourrierController {
  async insertTarifarioTransportistaCourrier(req: Request, res: Response) {
    const { idTransportista, idUser } = req.body;
    const data_TransportistasCourriers = req.body.dataTransportistas;

    try {
      await importarTransportistaCourrierService.insertTransportistasCourriers(
        data_TransportistasCourriers,
        idTransportista,
        idUser,
      );
      res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}
