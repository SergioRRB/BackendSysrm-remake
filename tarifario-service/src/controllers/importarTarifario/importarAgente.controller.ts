import { Request, Response } from 'express'; // Importa los tipos Request y Response de Express
import { ImportarAgenteAereoService } from '../../services/importarTarifarioService/AgenteTarifario/importAereos/importAereo.service'; // Importa el servicio para importar tarifarios de agentes aéreos
import { ImportarAgenteCourrierService } from '../../services/importarTarifarioService/AgenteTarifario/importCourriers/importCourrier.service'; // Importa el servicio para importar tarifarios de agentes courriers

// Crea una instancia del servicio para agentes aéreos
const importAgenteAereoService = new ImportarAgenteAereoService();

/**
 * Controlador para importar tarifarios de agentes aéreos.
 */
export class ImportarAgenteAereroController {
  /**
   * Inserta los tarifarios de un agente aéreo.
   * 
   * @param {Request} req - Objeto de solicitud de Express que contiene los datos para la inserción.
   * @param {Response} res - Objeto de respuesta de Express que se utiliza para enviar la respuesta al cliente.
   * @returns {Promise<Response>} - Retorna una respuesta JSON confirmando la inserción o un mensaje de error.
   */
  async insertTarifarioAgenteAereo(req: Request, res: Response) {
    const { idArea, idUser } = req.body; // Extrae el ID del área y el ID del usuario del cuerpo de la solicitud
    const data_AgenteAereo = req.body.data_AgenteAereo; // Extrae los datos del agente aéreo del cuerpo de la solicitud

    try {
      // Llama al servicio para insertar los datos del agente aéreo
      await importAgenteAereoService.insertAgenteAereo(data_AgenteAereo, idArea, idUser);
      // Retorna un mensaje de éxito
      res.status(200).json({ message: 'Datos insertados correctamente' });
    } catch (error) {
      // Retorna un mensaje de error si ocurre una excepción
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

// Crea una instancia del servicio para agentes courriers
const importarAgenteCourrierService = new ImportarAgenteCourrierService();

/**
 * Controlador para importar tarifarios de agentes courriers.
 */
export class ImportartAgenteCourrierController {
  /**
   * Inserta los tarifarios de un agente courrier.
   * 
   * @param {Request} req - Objeto de solicitud de Express que contiene los datos para la inserción.
   * @param {Response} res - Objeto de respuesta de Express que se utiliza para enviar la respuesta al cliente.
   * @returns {Promise<Response>} - Retorna una respuesta JSON confirmando la inserción o un mensaje de error.
   */
  async insertTarifarioAgenteCourrier(req: Request, res: Response) {
    const { idArea, idUser } = req.body; // Extrae el ID del área y el ID del usuario del cuerpo de la solicitud
    const data_AgenteCourrier = req.body.data_AgenteCourrier; // Extrae los datos del agente courrier del cuerpo de la solicitud

    try {
      // Llama al servicio para insertar los datos del agente courrier
      await importarAgenteCourrierService.insertCourrier(data_AgenteCourrier, idArea, idUser);
      // Retorna un mensaje de éxito
      res.status(200).json({ message: 'Datos insertados correctamente' });
    } catch (error) {
      // Retorna un mensaje de error si ocurre una excepción
      res.status(500).json({ message: (error as Error).message });
    }
  }
}
