// src/controllers/exportarUbigeo/exportarUbigeoController.ts

import { Request, Response } from "express";
import { exportarUbigeo } from "../../services/exportarUbigeo/exportUbigeo.service";

export const handleExportarUbigeo = async (req: Request, res: Response) => {
  try {
    const data = await exportarUbigeo();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al exportar los datos de ubigeo" });
  }
};
