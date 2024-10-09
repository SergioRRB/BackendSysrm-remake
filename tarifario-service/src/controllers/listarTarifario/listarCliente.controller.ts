import { Request, Response } from "express";
import listarTarifarioService from "../../services/listarTarifarioService/listarCliente.service";

const listarClienteController = {
  async listarAereo(req: Request, res: Response) {
    const { id } = req.params; // Suponiendo que recibes el id como parámetro de la ruta
    try {
      const resultados = await listarTarifarioService.aereo(Number(id));
      res.json(resultados);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al listar tarifas aéreas" });
    }
  },
  /*
  async listarAereo(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const tarifas = await TarifariosClienteService.aereo(id);
      res.status(200).json(tarifas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching tarifas aéreas" });
    }
  },
  async listarCarga(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const tarifas = await TarifariosClienteService.carga(id);
      res.status(200).json(tarifas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching tarifas de carga" });
    }
  },

  async listarCourrier(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const tarifas = await TarifariosClienteService.courrier(id);
      res.status(200).json(tarifas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching tarifas de courier" });
    }
  },

  async listarInverso(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const tarifas = await TarifariosClienteService.inverso(id);
      res.status(200).json(tarifas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching tarifas inversas" });
    }
  },

  async listarTransito(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const tarifas = await TarifariosClienteService.transito(id);
      res.status(200).json(tarifas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching tarifas de tránsito" });
    }
  },

  async listarValorizado(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const tarifas = await TarifariosClienteService.valorizado(id);
      res.status(200).json(tarifas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching tarifas valorizadas" });
    }
  },
*/
};

export default listarClienteController;
