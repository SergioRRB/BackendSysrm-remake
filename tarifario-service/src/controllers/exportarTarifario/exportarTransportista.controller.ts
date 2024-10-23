import { Request, Response } from "express"; // Importa las interfaces Request y Response de Express
import { ExportarTarifarioTransportistaCargaService } from "../../services/exportarTarifarioService/TransportistaTarifario/exportCargas/exportarCarga.service"; // Servicio para exportar tarifarios de transportista de carga
import { ExportarTarifarioTransportistaCourrierService } from "../../services/exportarTarifarioService/TransportistaTarifario/exportCourriers/exportCourrier.service"; // Servicio para exportar tarifarios de transportista courrier

// Controlador para manejar la exportación de tarifarios de transportista de carga
export const ExportarTarifarioTransportistaCargaController = {
  /**
   * Exporta tarifarios para un transportista de carga específico.
   * 
   * @param {Request} req - El objeto de solicitud de Express que contiene los parámetros de la solicitud.
   * @param {Response} res - El objeto de respuesta de Express para enviar respuestas al cliente.
   * @returns {Promise<Response>} - Respuesta JSON con los tarifarios del transportista de carga o un mensaje de error.
   */
  async exportarTransportistaCarga(req: Request, res: Response) {
    const { id_transportista } = req.params; // Extrae el ID del transportista de los parámetros de la ruta

    try {
      // Llama al servicio para obtener los tarifarios del transportista de carga
      const expTransportistaCarga =
        await ExportarTarifarioTransportistaCargaService.transportistaCarga(
          Number(id_transportista),
        );

      // Verifica si se encontraron tarifarios
      if (expTransportistaCarga.length === 0) {
        return res.status(404).json({
          message:
            "No se encontraron tarifarios para este transportista carga.",
        });
      }

      // Devuelve los tarifarios encontrados con un estado 200
      return res.status(200).json(expTransportistaCarga);
    } catch (error) {
      console.error("Error al exportar tarifarios:", error); // Registra el error en la consola
      return res.status(500).json({ message: "Error interno del servidor." }); // Devuelve un error 500 si ocurre un problema
    }
  },
};

// Controlador para manejar la exportación de tarifarios de transportista courrier
export const ExportarTarifarioTransportistaCourrierController = {
  /**
   * Exporta tarifarios para un transportista courrier específico.
   * 
   * @param {Request} req - El objeto de solicitud de Express que contiene los parámetros de la solicitud.
   * @param {Response} res - El objeto de respuesta de Express para enviar respuestas al cliente.
   * @returns {Promise<Response>} - Respuesta JSON con los tarifarios del transportista courrier o un mensaje de error.
   */
  async exportarTransportistaCourrier(req: Request, res: Response) {
    const { id_transportista } = req.params; // Extrae el ID del transportista de los parámetros de la ruta

    try {
      // Llama al servicio para obtener los tarifarios del transportista courrier
      const expTransportistaCourrier =
        await ExportarTarifarioTransportistaCourrierService.transportistaCourrier(
          Number(id_transportista),
        );

      // Verifica si se encontraron tarifarios
      if (expTransportistaCourrier.length === 0) {
        return res.status(404).json({
          message:
            "No se encontraron tarifarios para este transportista courrier.",
        });
      }

      // Devuelve los tarifarios encontrados con un estado 200
      return res.status(200).json(expTransportistaCourrier);
    } catch (error) {
      console.error("Error al exportar tarifarios:", error); // Registra el error en la consola
      return res.status(500).json({ message: "Error interno del servidor." }); // Devuelve un error 500 si ocurre un problema
    }
  },
};
