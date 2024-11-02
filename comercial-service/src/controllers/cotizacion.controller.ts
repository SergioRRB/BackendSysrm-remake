/*
import { Request, Response } from 'express';
import { obtenerCotizaciones } from '../services/cotizacion.service';

export const listarCotizaciones = async (_req: Request, res: Response) => {
  try {
    const cotizaciones = await obtenerCotizaciones();
    res.status(200).json(cotizaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener cotizaciones' });
  }
};*/

// export const guardarCotizacionController = async (req: Request, res: Response) => {
//   try {
//     const resultado = await guardarCotizacionService(req.body);
//     if (resultado.success) {
//       return res.status(200).json(resultado);
//     } else {
//       return res.status(400).json(resultado);
//     }
//   } catch (error: any) {
//     return res.status(500).json({ success: false, message: 'Error al generar la cotización', error: error.message });
//   }
// };
