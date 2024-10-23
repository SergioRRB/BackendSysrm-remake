import { Request, Response } from "express";
import { TarifarioTransportistaCargaService } from "../../services/listarTarifarioService/TransportistaTarifario/listCargas/listCarga.service";

/**
 * Controlador para gestionar las tarifas de transportistas.
 * Proporciona métodos para listar tarifas de carga y courriers para transportistas.
 */
export const TarifaraTransportistaController = {
  /**
   * Lista las tarifas de carga de un transportista específico.
   *
   * Esta función maneja la solicitud HTTP para obtener los datos de tarifas
   * de carga de un transportista. El ID del transportista se extrae de los parámetros
   * de la solicitud. Si se produce un error, se devuelve un mensaje de error 500.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene el ID del transportista en los parámetros.
   * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     que contiene los datos de tarifas de carga o un mensaje de error en caso de fallo.
   *
   * @throws {Error} - Lanza un error si se produce un problema interno al obtener los datos de tarifas.
   */
  async listTarifaTransportistaCarga(req: Request, res: Response) {
    const id_transportista = parseInt(req.params.id_transportista); 

    try {
      const tarifarioTransportistaCarga =
        await TarifarioTransportistaCargaService.carga(id_transportista);
      return res.status(200).json(tarifarioTransportistaCarga);
    } catch (error) {
      console.error("Error fetching transportista cargas:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching data." });
    }
  },

  /**
   * Lista las tarifas de courriers de un transportista específico.
   *
   * Esta función maneja la solicitud HTTP para obtener los datos de tarifas
   * de courriers de un transportista. El ID del transportista se extrae de los parámetros
   * de la solicitud. Si se produce un error, se devuelve un mensaje de error 500.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene el ID del transportista en los parámetros.
   * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     que contiene los datos de tarifas de courriers o un mensaje de error en caso de fallo.
   *
   * @throws {Error} - Lanza un error si se produce un problema interno al obtener los datos de tarifas.
   */
  async listTarifaTransportistaCourrier(req: Request, res: Response) {
    const id_transportista = parseInt(req.params.id_transportista); 

    try {
      const tarifarioTransportistaCourrier =
        await TarifarioTransportistaCargaService.carga(id_transportista);
      return res.status(200).json(tarifarioTransportistaCourrier);
    } catch (error) {
      console.error("Error fetching transportista courriers:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching data." });
    }
  },
};
