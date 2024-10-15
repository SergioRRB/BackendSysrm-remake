// src/controllers/listarTarifario/listarTransportista.controller.ts

import { Request, Response } from "express";
import { TarifarioTransportistaCargaService } from "../../services/listarTarifarioService/TransportistaTarifario/listCargas/listCarga.service";

export const TarifaraTransportistaController = {
  async listTarifaTransportistaCarga(req: Request, res: Response) {
    const id_transportista = parseInt(req.params.id_transportista); // Cambiado a 'id_transportista'

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
};
