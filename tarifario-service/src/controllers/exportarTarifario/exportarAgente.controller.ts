import { Request, Response } from "express";
import { ExportarTarifarioAgenteAereoService } from "../../services/exportarTarifarioService/AgenteTarifario/exportAereos/exportAereo.service";
import { ExportarTarifarioAgenteCourrierService } from "../../services/exportarTarifarioService/AgenteTarifario/exportCourriers/exportCourrier.service";

export const ExportarTarifarioAgenteAereoController = {
  async exportarAgenteAereo(req: Request, res: Response) {
    const { id_agente } = req.params; // Suponiendo que el ID se pasa como parámetro en la URL

    try {
      const expAgenteAereo = await ExportarTarifarioAgenteAereoService.aereo(
        Number(id_agente),
      );

      if (expAgenteAereo.length === 0) {
        return res.status(404).json({
          message: "No se encontraron tarifarios para este agente aereo.",
        });
      }

      return res.status(200).json(expAgenteAereo);
    } catch (error) {
      console.error("Error al exportar tarifarios:", error);
      return res.status(500).json({ message: "Error interno del servidor." });
    }
  },
};

export const ExportarTarifarioAgenteCourrierController = {
  async exportarAgenteCourrier(req: Request, res: Response) {
    const { id_agente } = req.params; // Suponiendo que el ID se pasa como parámetro en la URL

    try {
      const expAgenteCourrier =
        await ExportarTarifarioAgenteCourrierService.courrier(
          Number(id_agente),
        );

      if (expAgenteCourrier.length === 0) {
        return res.status(404).json({
          message: "No se encontraron tarifarios para este agente courrier.",
        });
      }

      return res.status(200).json(expAgenteCourrier);
    } catch (error) {
      console.error("Error al exportar tarifarios:", error);
      return res.status(500).json({ message: "Error interno del servidor." });
    }
  },
};
