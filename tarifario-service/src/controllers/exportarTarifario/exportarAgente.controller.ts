import { Request, Response } from "express";
import { ExportarTarifarioAgenteAereoService } from "../../services/exportarTarifarioService/AgenteTarifario/exportAereos/exportAereo.service";
import { ExportarTarifarioAgenteCourrierService } from "../../services/exportarTarifarioService/AgenteTarifario/exportCourriers/exportCourrier.service";

/**
 * Controlador para exportar tarifarios de agentes aéreos.
 * @type {Object}
 */
export const ExportarTarifarioAgenteAereoController = {
  /**
   * Exporta los tarifarios para un agente aéreo específico.
   *
   * Esta función maneja la solicitud HTTP para exportar datos de tarifas
   * para un agente aéreo basado en el ID proporcionado en los parámetros de la URL.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene los parámetros.
   * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     con los datos de tarifas o un mensaje de error en caso de fallo.
   *
   * @throws {Error} - Lanza un error si se produce un problema interno durante el proceso de exportación.
   */
  async exportarAgenteAereo(req: Request, res: Response): Promise<Response<any>> {
    const { id_agente } = req.params; 
    try {
      // Llamada al servicio para obtener las tarifas aéreas del agente
      const expAgenteAereo = await ExportarTarifarioAgenteAereoService.aereo(
        Number(id_agente),
      );

      // Verificación de si se encontraron tarifarios
      if (expAgenteAereo.length === 0) {
        return res.status(404).json({
          message: "No se encontraron tarifarios para este agente aéreo.",
        });
      }

      // Retorno de la respuesta exitosa
      return res.status(200).json(expAgenteAereo);
    } catch (error) {
      console.error("Error al exportar tarifarios de agente aéreo:", error);
      // En caso de error, retorno de un mensaje de error con estado 500
      return res.status(500).json({ message: "Error interno del servidor." });
    }
  },
};

/**
 * Controlador para exportar tarifarios de agentes de courrier.
 * @type {Object}
 */
export const ExportarTarifarioAgenteCourrierController = {
  /**
   * Exporta los tarifarios para un agente de courrier específico.
   *
   * Esta función maneja la solicitud HTTP para exportar datos de tarifas
   * para un agente de courrier basado en el ID proporcionado en los parámetros de la URL.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene los parámetros.
   * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     con los datos de tarifas o un mensaje de error en caso de fallo.
   *
   * @throws {Error} - Lanza un error si se produce un problema interno durante el proceso de exportación.
   */
  async exportarAgenteCourrier(req: Request, res: Response): Promise<Response<any>> {
    const { id_agente } = req.params; 
    try {
      // Llamada al servicio para obtener las tarifas de courrier del agente
      const expAgenteCourrier =
        await ExportarTarifarioAgenteCourrierService.courrier(
          Number(id_agente),
        );

      // Verificación de si se encontraron tarifarios
      if (expAgenteCourrier.length === 0) {
        return res.status(404).json({
          message: "No se encontraron tarifarios para este agente de courrier.",
        });
      }

      // Retorno de la respuesta exitosa
      return res.status(200).json(expAgenteCourrier);
    } catch (error) {
      console.error("Error al exportar tarifarios de agente de courrier:", error);
      // En caso de error, retorno de un mensaje de error con estado 500
      return res.status(500).json({ message: "Error interno del servidor." });
    }
  },
};
