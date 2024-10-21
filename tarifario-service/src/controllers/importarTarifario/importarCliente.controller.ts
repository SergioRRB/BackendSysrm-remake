import { Request, Response } from "express";
import { ImportarClienteAereoService } from "../../services/importarTarifarioService/ClienteTarifario/importAereos/importAereos.service";
import { ImportarClienteCargaService } from "../../services/importarTarifarioService/ClienteTarifario/importCargas/imrportCargas.service";
import { ImportarClienteCourrierService } from "../../services/importarTarifarioService/ClienteTarifario/importCourriers/importCourriers.service";
import { ImportarClienteValorizadoService } from "../../services/importarTarifarioService/ClienteTarifario/importValorizados/importValorizados.service";

const importarClienteAereoService = new ImportarClienteAereoService();

export class ImportarClienteAereoController {
  async insertTarifarioClienteAereo(req: Request, res: Response) {
    const { idCliente, idArea, idUser } = req.body;
    const data_ClientesAereos = req.body.dataClientes;

    try {
      await importarClienteAereoService.insertClientesAereos(
        data_ClientesAereos,
        idCliente,
        idArea,
        idUser,
      );
      res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

const importarClienteCargaService = new ImportarClienteCargaService();

export class ImportarClienteCargaController {
  async insertTarifarioClienteCarga(req: Request, res: Response) {
    const { idCliente, idArea, idUser } = req.body;
    const data_ClientesCargas = req.body.dataClientes;

    try {
      await importarClienteCargaService.insertClientesCargas(
        data_ClientesCargas,
        idCliente,
        idArea,
        idUser,
      );
      res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

const importarClienteCourrierService = new ImportarClienteCourrierService();

export class ImportarClienteCourrierController {
  async insertTarifarioClienteCourrier(req: Request, res: Response) {
    const { idCliente, idArea, idUser } = req.body;
    const data_ClientesCourriers = req.body.dataClientes;

    try {
      await importarClienteCourrierService.insertClientesCourriers(
        data_ClientesCourriers,
        idCliente,
        idArea,
        idUser,
      );
      res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

const importarClienteValorizadoService = new ImportarClienteValorizadoService();

export class ImportarClienteValorizadoController {
  async insertTarifarioClienteValorizado(req: Request, res: Response) {
    const { idCliente, idArea, idUser } = req.body;
    const data_ClientesValorizados = req.body.dataClientes;

    try {
      await importarClienteValorizadoService.insertClientesValorizados(
        data_ClientesValorizados,
        idCliente,
        idArea,
        idUser,
      );
      res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}
