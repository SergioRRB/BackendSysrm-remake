/*
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
}*/
import { Request, Response } from "express";
import { SelectionTarifarioService } from "../../services/selectionTarifarioService/selectionTarifario.service";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { SelectionClienteDto } from "../../dtos/selectionTarifarioDto/selectionCliente.dto";

const selectionTarifarioService = new SelectionTarifarioService();

export class SelectionTarifarioController {
  async getTarifario(req: Request, res: Response) {
    // Convertimos los parámetros a los tipos correctos
    const dto = plainToInstance(SelectionClienteDto, {
      id_cliente: Number(req.query.id_cliente),
      id_area: Number(req.query.id_area),
      ubigeo: Number(req.query.ubigeo),
      tarifario: req.query.tarifario,
    });

    // Validamos los datos del DTO
    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json({
        message: "Error en la validación de los parámetros.",
        errors: errors.map((err) => err.constraints),
      });
    }

    try {
      const tarifas = await selectionTarifarioService.obtenerTarifarioUbigeo(
        dto.id_cliente,
        dto.id_area,
        dto.ubigeo,
        dto.tarifario,
      );

      return res.json(tarifas);
    } catch (error) {
      console.error("Error fetching tarifario:", error);
      return res.status(500).json({ message: "Error fetching tarifario." });
    }
  }
}


