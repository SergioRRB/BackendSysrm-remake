import { Request, Response } from "express";
import { TarifarioAgenteAereoService } from "../../services/listarTarifarioService/AgenteTarifario/listAereos/listAereo.service";
import { TarifarioAgenteCourrierService } from "../../services/listarTarifarioService/AgenteTarifario/listCourriers/listCourrier.service";

export const TarifaAgenteController = {
  async listTarifaAgenteAereo(req: Request, res: Response) {
    try {
      const id_agente = parseInt(req.params.id_agente);

      // Llama al servicio para obtener los datos de tarifas aéreas
      const tarifarioAgenteAereo =
        await TarifarioAgenteAereoService.aereo(id_agente);

      // Devuelve los datos en la respuesta
      return res.json(tarifarioAgenteAereo);
    } catch (error) {
      console.error("Error al obtener el tarifario agente aéreo:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async listTarifaAgenteCourrier(req: Request, res: Response) {
    try {
      const id_agente = parseInt(req.params.id_agente);

      // Llama al servicio para obtener los datos de tarifas de courriers
      const tarifarioAgenteCourrier =
        await TarifarioAgenteCourrierService.courrier(id_agente);

      // Devuelve los datos en la respuesta
      return res.json(tarifarioAgenteCourrier);
    } catch (error) {
      console.error("Error al obtener el tarifario agente courrier:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};
