// src/controllers/selectionTarifario/selectionTarifario.controller.ts
import { Request, Response } from "express";
import { SelectionTarifarioService } from "../../services/selectionTarifarioService/selectionTarifario.service";

const selectionTarifarioService = new SelectionTarifarioService();

export class SelectionTarifarioController {
  async getTarifario(req: Request, res: Response) {
    const { id_cliente, id_area, ubigeo, tarifario } = req.query;

    if (!id_cliente || !id_area || !ubigeo || !tarifario) {
      return res.status(400).json({ message: "Missing required parameters." });
    }

    try {
      const tarifas = await selectionTarifarioService.obtenerTarifarioUbigeo(
        Number(id_cliente),
        Number(id_area),
        Number(ubigeo),
        String(tarifario),
      );

      return res.json(tarifas);
    } catch (error) {
      console.error("Error fetching tarifario:", error);
      return res.status(500).json({ message: "Error fetching tarifario." });
    }
  }
}
