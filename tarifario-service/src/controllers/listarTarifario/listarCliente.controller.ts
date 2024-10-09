import { Request, Response } from "express";
import { TarifarioClienteService } from "../../services/listarTarifarioService/listarCliente.service";

export const listTarifaClienteAereo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await TarifarioClienteService.aereo(parseInt(id, 10));
    if (result.length === 0)
      return res.status(404).json({ message: "No se encontraron tarifas." });
    res.status(200).json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred." });
    }
  }
};

/*
export const listTarifaCorporativoCarga = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const result = await CorporativoService.carga(parseInt(id, 10));
    if (result.length === 0)
      return res.status(404).json({ message: "No se encontraron tarifas." });
    res.status(200).json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred." });
    }
  }
};
*/

// Repite lo mismo para los otros controladores...
