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

// Método para carga cliente
export const listTarifaClienteCarga = async (req: Request, res: Response) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const tarifarioClienteCarga = await TarifarioClienteService.carga(
      id_cliente,
      id_area,
    );
    res.json(tarifarioClienteCarga);
  } catch (error) {
    console.error("Error al obtener el tarifario cliente carga:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const listTarifaClienteCourrier = async (
  req: Request,
  res: Response,
) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const tarifarioClienteCourrier = await TarifarioClienteService.courrier(
      id_cliente,
      id_area,
    );
    res.json(tarifarioClienteCourrier);
  } catch (error) {
    console.error("Error al obtener el tarifario cliente courrier:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const listTarifaClienteValorizado = async (
  req: Request,
  res: Response,
) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const tarifarioClienteValorizado =
      await TarifarioClienteService.valorizados(id_cliente, id_area);

    res.json(tarifarioClienteValorizado);
  } catch (error) {
    console.error("Error al obtener el tarifario cliente valorizado:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
