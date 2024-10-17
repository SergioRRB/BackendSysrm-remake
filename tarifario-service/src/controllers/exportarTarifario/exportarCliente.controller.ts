import { Request, Response } from "express";
import { ExportarTarifarioClienteCargaService } from "../../services/exportarTarifarioService/ClienteTarifario/exportCargas/exportarCarga.service";
import { ExportarTarifarioClienteValorizadoService } from "../../services/exportarTarifarioService/ClienteTarifario/exportValorizados/exportarValorizado.service";
import { ExportarTarifarioClienteAereoService } from "../../services/exportarTarifarioService/ClienteTarifario/exportAereos/exportarAereo.service";
import { ExportarTarifarioClienteCourrierService } from "../../services/exportarTarifarioService/ClienteTarifario/exportCourriers/exportarCourrier.service";

export const exportarTarifaClienteCarga = async (
  req: Request,
  res: Response,
) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const exportarTarifarioCliente =
      await ExportarTarifarioClienteCargaService.cargaCliente(
        id_cliente,
        id_area,
      );
    res.json(exportarTarifarioCliente);
  } catch (error) {
    console.error("Error al exportar tarifarios de cliente carga:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const exportarTarifaClienteValorizado = async (
  req: Request,
  res: Response,
) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const exportarTarifarioClienteValorizado =
      await ExportarTarifarioClienteValorizadoService.valorizadoCliente(
        id_cliente,
        id_area,
      );
    res.json(exportarTarifarioClienteValorizado);
  } catch (error) {
    console.error("Error al exportar tarifarios de cliente valorizado:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const exportarTarifaClienteAereo = async (
  req: Request,
  res: Response,
) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const exportarTarifarioClienteAereo =
      await ExportarTarifarioClienteAereoService.aereoCliente(
        id_cliente,
        id_area,
      );
    res.json(exportarTarifarioClienteAereo);
  } catch (error) {
    console.error("Error al exportar tarifarios de cliente aereo:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

export const exportarTarifaClienteCourrier = async (
  req: Request,
  res: Response,
) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const exportarTarifarioClienteCourrier =
      await ExportarTarifarioClienteCourrierService.courrierCliente(
        id_cliente,
        id_area,
      );
    res.json(exportarTarifarioClienteCourrier);
  } catch (error) {
    console.error("Error al exportar tarifarios de cliente courrier:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};
