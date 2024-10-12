// src/controllers/listarTarifario/listarAgente.controller.ts
import { Request, Response } from "express";
import { TarifarioAgenteAereoService } from "../../services/listarTarifarioService/AgenteTarifario/listAereos/listAereo.service";
import { ListarAgenteDto } from "../../dtos/listarTarifarioDto/listarAgente.dto"; // Asegúrate de que la ruta del DTO es correcta
import { validateDto } from "../../middlewares/validate"; // Importa el middleware de validación

export const listarAgenteAereo = {
  async getAereoAgente(req: Request, res: Response) {
    const { id_agente } = req.body; // Obtén el id_agente del cuerpo de la solicitud

    // Verifica si el ID es un número válido
    if (isNaN(id_agente) || id_agente <= 0) {
      return res.status(400).json({
        message: "El ID del agente no es válido",
      });
    }

    try {
      const tarifas = await TarifarioAgenteAereoService.aereo(id_agente);
      return res.json(tarifas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error al obtener las tarifas",
      });
    }
  },
};
