import { Request, Response } from "express";
import { ExportarTarifarioTransportistaCargaService } from "../../services/exportarTarifarioService/TransportistaTarifario/exportCargas/exportarCarga.service";
import { ExportarTarifarioTransportistaCourrierService } from "../../services/exportarTarifarioService/TransportistaTarifario/exportCourriers/exportCourrier.service";

export const ExportarTarifarioTransportistaCargaController = {
  async exportarTransportistaCarga(req: Request, res: Response) {
    const { id_transportista } = req.params; // Suponiendo que el ID se pasa como parámetro en la URL

    try {
      const expTransportistaCarga =
        await ExportarTarifarioTransportistaCargaService.transportistaCarga(
          Number(id_transportista),
        );

      if (expTransportistaCarga.length === 0) {
        return res.status(404).json({
          message:
            "No se encontraron tarifarios para este transportista carga.",
        });
      }

      return res.status(200).json(expTransportistaCarga);
    } catch (error) {
      console.error("Error al exportar tarifarios:", error);
      return res.status(500).json({ message: "Error interno del servidor." });
    }
  },
};

export const ExportarTarifarioTransportistaCourrierController = {
  async exportarTransportistaCarga(req: Request, res: Response) {
    const { id_transportista } = req.params; // Suponiendo que el ID se pasa como parámetro en la URL

    try {
      const expTransportistaCourrier =
        await ExportarTarifarioTransportistaCourrierService.transportistaCourrier(
          Number(id_transportista),
        );

      if (expTransportistaCourrier.length === 0) {
        return res.status(404).json({
          message:
            "No se encontraron tarifarios para este transportista courrier.",
        });
      }

      return res.status(200).json(expTransportistaCourrier);
    } catch (error) {
      console.error("Error al exportar tarifarios:", error);
      return res.status(500).json({ message: "Error interno del servidor." });
    }
  },
};
