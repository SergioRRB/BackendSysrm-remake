import { Request, Response } from "express";
import { TarifarioAgenteAereoService } from "../../services/listarTarifarioService/AgenteTarifario/listAereos/listAereo.service";
import { TarifarioAgenteCourrierService } from "../../services/listarTarifarioService/AgenteTarifario/listCourriers/listCourrier.service";

/**
 * Controlador para gestionar las tarifas de agentes.
 * Proporciona métodos para listar tarifas aéreas y de courriers.
 */
export const TarifaAgenteController = {
  /**
   * Lista las tarifas de un agente aéreo específico.
   *
   * Esta función maneja la solicitud HTTP para obtener los datos de tarifas
   * de un agente aéreo. El ID del agente se extrae de los parámetros de la
   * solicitud. Si se produce un error, se devuelve un mensaje de error 500.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene el ID del agente en los parámetros.
   * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     que contiene los datos de tarifas aéreas o un mensaje de error en caso de fallo.
   *
   * @throws {Error} - Lanza un error si se produce un problema interno al obtener los datos de tarifas.
   */
  async listTarifaAgenteAereo(req: Request, res: Response) {
    try {
      const id_agente = parseInt(req.params.id_agente);

      // Llama al servicio para obtener los datos de tarifas aéreas
      const tarifarioAgenteAereo = await TarifarioAgenteAereoService.aereo(id_agente);

      // Devuelve los datos en la respuesta
      return res.json(tarifarioAgenteAereo);
    } catch (error) {
      console.error("Error al obtener el tarifario agente aéreo:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  /**
   * Lista las tarifas de un agente de courrier específico.
   *
   * Esta función maneja la solicitud HTTP para obtener los datos de tarifas
   * de un agente de courrier. El ID del agente se extrae de los parámetros de la
   * solicitud. Si se produce un error, se devuelve un mensaje de error 500.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene el ID del agente en los parámetros.
   * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     que contiene los datos de tarifas de courriers o un mensaje de error en caso de fallo.
   *
   * @throws {Error} - Lanza un error si se produce un problema interno al obtener los datos de tarifas.
   */
  async listTarifaAgenteCourrier(req: Request, res: Response) {
    try {
      const id_agente = parseInt(req.params.id_agente);

      // Llama al servicio para obtener los datos de tarifas de courriers
      const tarifarioAgenteCourrier = await TarifarioAgenteCourrierService.courrier(id_agente);

      // Devuelve los datos en la respuesta
      return res.json(tarifarioAgenteCourrier);
    } catch (error) {
      console.error("Error al obtener el tarifario agente courrier:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};
