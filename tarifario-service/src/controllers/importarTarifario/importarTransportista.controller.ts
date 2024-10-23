import { Request, Response } from "express";
import { ImportarTransportistaCargaService } from "../../services/importarTarifarioService/TransportistaTarifario/importCargas/importCargas.service";
import { ImportarTransportistaCourrierService } from "../../services/importarTarifarioService/TransportistaTarifario/importCourriers/importCourriers.service";

const importarTransportistaCargaService = new ImportarTransportistaCargaService();

/**
 * Controlador para importar tarifarios de transportistas de carga.
 */
export class ImportarTransportistaCargaController {
  /**
   * Inserta los datos de tarifarios para un transportista de carga específico.
   *
   * Esta función maneja la solicitud HTTP para insertar datos de tarifas
   * para un transportista de carga. Los datos se envían en el cuerpo de la solicitud
   * y deben incluir el ID del transportista y el ID del usuario que realiza la inserción.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene los datos en el cuerpo.
   * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     que confirma la inserción o un mensaje de error en caso de fallo.
   *
   * @throws {Error} - Lanza un error si se produce un problema interno durante el proceso de inserción.
   *                   Se capturará y se devolverá un mensaje de error 500 al cliente.
   */
  async insertTarifarioTransportistaCarga(req: Request, res: Response): Promise<Response<any>> {
    const { idTransportista, idUser } = req.body;
    const data_TransportistasCargas = req.body.dataTransportistas;

    try {
      // Inserta los datos de transportistas de carga en el servicio correspondiente
      await importarTransportistaCargaService.insertTransportistasCargas(
        data_TransportistasCargas,
        idTransportista,
        idUser,
      );
      // Respuesta exitosa
      return res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      // En caso de error, retorno de un mensaje de error con estado 500
      return res.status(500).json({ message: (error as Error).message });
    }
  }
}

const importarTransportistaCourrierService = new ImportarTransportistaCourrierService();

/**
 * Controlador para importar tarifarios de transportistas de courrier.
 */
export class ImportarTransportistaCourrierController {
  /**
   * Inserta los datos de tarifarios para un transportista de courrier específico.
   *
   * Esta función maneja la solicitud HTTP para insertar datos de tarifas
   * para un transportista de courrier. Los datos se envían en el cuerpo de la solicitud
   * y deben incluir el ID del transportista y el ID del usuario que realiza la inserción.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene los datos en el cuerpo.
   * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     que confirma la inserción o un mensaje de error en caso de fallo.
   *
   * @throws {Error} - Lanza un error si se produce un problema interno durante el proceso de inserción.
   *                   Se capturará y se devolverá un mensaje de error 500 al cliente.
   */
  async insertTarifarioTransportistaCourrier(req: Request, res: Response): Promise<Response<any>> {
    const { idTransportista, idUser } = req.body;
    const data_TransportistasCourriers = req.body.dataTransportistas;

    try {
      // Inserta los datos de transportistas de courrier en el servicio correspondiente
      await importarTransportistaCourrierService.insertTransportistasCourriers(
        data_TransportistasCourriers,
        idTransportista,
        idUser,
      );
      // Respuesta exitosa
      return res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      // En caso de error, retorno de un mensaje de error con estado 500
      return res.status(500).json({ message: (error as Error).message });
    }
  }
}
