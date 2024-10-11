import { Request, Response } from "express";
import { TarifarioClienteService } from "../../services/listarTarifarioService/listarCliente.service";

export const listTarifaClienteAereo = async (req: Request, res: Response) => {
  try {
    // Obtener los parámetros de la URL
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    // Llamar al servicio para obtener los datos
    const tarifarioCliente = await TarifarioClienteService.aereo(
      id_cliente,
      id_area,
    );

    // Devolver los datos en la respuesta
    res.json(tarifarioCliente);
  } catch (error) {
    console.error("Error al obtener el tarifario cliente aéreo:", error);
    res.status(500).json({ error: "Error interno del servidor" });
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
