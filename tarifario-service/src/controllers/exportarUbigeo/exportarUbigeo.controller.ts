import { Request, Response } from "express";
import { exportarUbigeo } from "../../services/exportarUbigeo/exportUbigeo.service";

/**
 * Maneja la exportación de datos de ubigeo.
 *
 * Esta función recupera los datos de ubigeo desde el servicio y los envía como respuesta JSON.
 *
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express que se utiliza para enviar la respuesta HTTP deseada.
 * @returns {Promise<Response>} - Una promesa que se resuelve en el objeto de respuesta de Express que contiene los datos de ubigeo o un mensaje de error.
 */
export const handleExportarUbigeo = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Recuperar los datos de ubigeo llamando a la función del servicio exportarUbigeo.
    const data = await exportarUbigeo();
    
    // Enviar una respuesta con estado 200 y los datos de ubigeo.
    return res.status(200).json(data);
  } catch (error) {
    // Manejar cualquier error enviando una respuesta con estado 500 y un mensaje de error.
    console.error("Error al exportar los datos de ubigeo:", error);
    return res.status(500).json({ error: "Error al exportar los datos de ubigeo" });
  }
};
