import { Request, Response } from "express";
import { ImportarClienteAereoService } from "../../services/importarTarifarioService/ClienteTarifario/importAereos/importAereos.service";
import { ImportarClienteCargaService } from "../../services/importarTarifarioService/ClienteTarifario/importCargas/imrportCargas.service";
import { ImportarClienteCourrierService } from "../../services/importarTarifarioService/ClienteTarifario/importCourriers/importCourriers.service";
import { ImportarClienteValorizadoService } from "../../services/importarTarifarioService/ClienteTarifario/importValorizados/importValorizados.service";

// Instanciar el servicio de importación de cliente aéreo.
const importarClienteAereoService = new ImportarClienteAereoService();

/**
 * Controlador para gestionar la importación de datos de tarifas de clientes aéreos.
 */
export class ImportarClienteAereoController {
  /**
   * Inserta datos de tarifas para un cliente aéreo.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene el cuerpo con los datos del cliente.
   * @param {Response} res - El objeto de respuesta de Express que se utiliza para enviar la respuesta HTTP.
   * @returns {Promise<Response>} - Una promesa que resuelve el objeto de respuesta de Express indicando el resultado de la operación.
   */
  async insertTarifarioClienteAereo(req: Request, res: Response): Promise<Response> {
    const { idCliente, idArea, idUser } = req.body;
    const data_ClientesAereos = req.body.dataClientes;

    try {
      // Llamar al método del servicio para insertar datos de clientes aéreos.
      await importarClienteAereoService.insertClientesAereos(
        data_ClientesAereos,
        idCliente,
        idArea,
        idUser,
      );
      // Enviar una respuesta de éxito.
      return res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      // Manejar errores y enviar una respuesta de error.
      return res.status(500).json({ message: (error as Error).message });
    }
  }
}

// Instanciar el servicio de importación de cliente carga.
const importarClienteCargaService = new ImportarClienteCargaService();

/**
 * Controlador para gestionar la importación de datos de tarifas de clientes de carga.
 */
export class ImportarClienteCargaController {
  /**
   * Inserta datos de tarifas para un cliente de carga.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene el cuerpo con los datos del cliente.
   * @param {Response} res - El objeto de respuesta de Express que se utiliza para enviar la respuesta HTTP.
   * @returns {Promise<Response>} - Una promesa que resuelve el objeto de respuesta de Express indicando el resultado de la operación.
   */
  async insertTarifarioClienteCarga(req: Request, res: Response): Promise<Response> {
    const { idCliente, idArea, idUser } = req.body;
    const data_ClientesCargas = req.body.dataClientes;

    try {
      // Llamar al método del servicio para insertar datos de clientes de carga.
      await importarClienteCargaService.insertClientesCargas(
        data_ClientesCargas,
        idCliente,
        idArea,
        idUser,
      );
      // Enviar una respuesta de éxito.
      return res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      // Manejar errores y enviar una respuesta de error.
      return res.status(500).json({ message: (error as Error).message });
    }
  }
}

// Instanciar el servicio de importación de cliente courrier.
const importarClienteCourrierService = new ImportarClienteCourrierService();

/**
 * Controlador para gestionar la importación de datos de tarifas de clientes courriers.
 */
export class ImportarClienteCourrierController {
  /**
   * Inserta datos de tarifas para un cliente courrier.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene el cuerpo con los datos del cliente.
   * @param {Response} res - El objeto de respuesta de Express que se utiliza para enviar la respuesta HTTP.
   * @returns {Promise<Response>} - Una promesa que resuelve el objeto de respuesta de Express indicando el resultado de la operación.
   */
  async insertTarifarioClienteCourrier(req: Request, res: Response): Promise<Response> {
    const { idCliente, idArea, idUser } = req.body;
    const data_ClientesCourriers = req.body.dataClientes;

    try {
      // Llamar al método del servicio para insertar datos de clientes courriers.
      await importarClienteCourrierService.insertClientesCourriers(
        data_ClientesCourriers,
        idCliente,
        idArea,
        idUser,
      );
      // Enviar una respuesta de éxito.
      return res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      // Manejar errores y enviar una respuesta de error.
      return res.status(500).json({ message: (error as Error).message });
    }
  }
}

// Instanciar el servicio de importación de cliente valorizado.
const importarClienteValorizadoService = new ImportarClienteValorizadoService();

/**
 * Controlador para gestionar la importación de datos de tarifas de clientes valorizados.
 */
export class ImportarClienteValorizadoController {
  /**
   * Inserta datos de tarifas para un cliente valorizado.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene el cuerpo con los datos del cliente.
   * @param {Response} res - El objeto de respuesta de Express que se utiliza para enviar la respuesta HTTP.
   * @returns {Promise<Response>} - Una promesa que resuelve el objeto de respuesta de Express indicando el resultado de la operación.
   */
  async insertTarifarioClienteValorizado(req: Request, res: Response): Promise<Response> {
    const { idCliente, idArea, idUser } = req.body;
    const data_ClientesValorizados = req.body.dataClientes;

    try {
      // Llamar al método del servicio para insertar datos de clientes valorizados.
      await importarClienteValorizadoService.insertClientesValorizados(
        data_ClientesValorizados,
        idCliente,
        idArea,
        idUser,
      );
      // Enviar una respuesta de éxito.
      return res.status(200).json({ message: "Datos insertados correctamente" });
    } catch (error) {
      // Manejar errores y enviar una respuesta de error.
      return res.status(500).json({ message: (error as Error).message });
    }
  }
}
