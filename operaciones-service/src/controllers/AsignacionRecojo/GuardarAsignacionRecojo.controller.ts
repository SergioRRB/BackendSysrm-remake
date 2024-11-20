import { Request, Response } from "express";
import { GuardarAsignacionRecojoService } from "../../services/AsignacionRecojo/saveAsignacionRecojo.service";

const guardarAsignacionRecojoService = new GuardarAsignacionRecojoService();

export class GuardarAsignacionRecojoController {
  async guardarAsignacion(req: Request, res: Response) {
    try {
      const result = await guardarAsignacionRecojoService.guardarAsignacion(
        req.body,
      );
      res.json(result);
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}
