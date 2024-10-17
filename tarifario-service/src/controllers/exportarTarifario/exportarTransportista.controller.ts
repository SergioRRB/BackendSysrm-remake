import { Request, Response } from "express";
import { ExportarTarifarioTransportistaService } from "../../services/exportarTarifarioService/TransportistaTarifario/exportCargas/exportarCarga.service";

export const ExportarTarifarioTransportistaCargaController = {
  async exportarTransportistaCarga(req: Request, res: Response) {
    const { id_transportista } = req.params; // Suponiendo que el ID se pasa como parámetro en la URL

    try {
      const expTransportistaCarga =
        await ExportarTarifarioTransportistaService.transportistaCarga(
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
