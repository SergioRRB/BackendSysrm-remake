import { Request, Response } from "express";
import { TarifarioClienteAereoService } from "../../services/listarTarifarioService/ClienteTarifario/listAereos/listarAereo.service";
import { TarifarioClienteCargaService } from "../../services/listarTarifarioService/ClienteTarifario/listCargas/listarCarga.service";
import { TarifarioClienteCourrierService } from "../../services/listarTarifarioService/ClienteTarifario/listCourriers/listarCourrier.service";
import { TarifarioClienteValorizadoService } from "../../services/listarTarifarioService/ClienteTarifario/listValorizados/listarValorizado.service";

/**
 * Controlador para gestionar las tarifas de clientes.
 * Proporciona métodos para listar tarifas aéreas, de carga, courriers y valorizados.
 */

/**
 * Lista las tarifas de un cliente aéreo específico.
 *
 * Esta función maneja la solicitud HTTP para obtener los datos de tarifas
 * de un cliente aéreo. Los IDs del cliente y el área se extraen de los parámetros
 * de la solicitud. Si se produce un error, se devuelve un mensaje de error 500.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los IDs del cliente y el área en los parámetros.
 * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
 *                                     que contiene los datos de tarifas aéreas o un mensaje de error en caso de fallo.
 *
 * @throws {Error} - Lanza un error si se produce un problema interno al obtener los datos de tarifas.
 */
export const listTarifaClienteAereo = async (req: Request, res: Response) => {
  try {
    // Obtener los parámetros de la URL
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);
    
    // Llamar al servicio para obtener los datos
    const tarifarioClienteAereo = await TarifarioClienteAereoService.aereo(
      id_cliente,
      id_area,
    );

    // Devolver los datos en la respuesta
    res.json(tarifarioClienteAereo);
  } catch (error) {
    console.error("Error al obtener el tarifario cliente aéreo:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

/**
 * Lista las tarifas de carga de un cliente específico.
 *
 * Esta función maneja la solicitud HTTP para obtener los datos de tarifas
 * de carga de un cliente. Los IDs del cliente y el área se extraen de los parámetros
 * de la solicitud. Si se produce un error, se devuelve un mensaje de error 500.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los IDs del cliente y el área en los parámetros.
 * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
 *                                     que contiene los datos de tarifas de carga o un mensaje de error en caso de fallo.
 *
 * @throws {Error} - Lanza un error si se produce un problema interno al obtener los datos de tarifas.
 */
export const listTarifaClienteCarga = async (req: Request, res: Response) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const tarifarioClienteCarga = await TarifarioClienteCargaService.carga(
      id_cliente,
      id_area,
    );
    
    res.json(tarifarioClienteCarga);
  } catch (error) {
    console.error("Error al obtener el tarifario cliente carga:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

/**
 * Lista las tarifas de un cliente de courrier específico.
 *
 * Esta función maneja la solicitud HTTP para obtener los datos de tarifas
 * de un cliente de courrier. Los IDs del cliente y el área se extraen de los parámetros
 * de la solicitud. Si se produce un error, se devuelve un mensaje de error 500.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los IDs del cliente y el área en los parámetros.
 * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
 *                                     que contiene los datos de tarifas de courrier o un mensaje de error en caso de fallo.
 *
 * @throws {Error} - Lanza un error si se produce un problema interno al obtener los datos de tarifas.
 */
export const listTarifaClienteCourrier = async (req: Request, res: Response) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const tarifarioClienteCourrier =
      await TarifarioClienteCourrierService.courrier(id_cliente, id_area);
    
    res.json(tarifarioClienteCourrier);
  } catch (error) {
    console.error("Error al obtener el tarifario cliente courrier:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

/**
 * Lista las tarifas valorizadas de un cliente específico.
 *
 * Esta función maneja la solicitud HTTP para obtener los datos de tarifas
 * valorizadas de un cliente. Los IDs del cliente y el área se extraen de los parámetros
 * de la solicitud. Si se produce un error, se devuelve un mensaje de error 500.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los IDs del cliente y el área en los parámetros.
 * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
 *                                     que contiene los datos de tarifas valorizadas o un mensaje de error en caso de fallo.
 *
 * @throws {Error} - Lanza un error si se produce un problema interno al obtener los datos de tarifas.
 */
export const listTarifaClienteValorizado = async (req: Request, res: Response) => {
  try {
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    const tarifarioClienteValorizado =
      await TarifarioClienteValorizadoService.valorizados(id_cliente, id_area);

    res.json(tarifarioClienteValorizado);
  } catch (error) {
    console.error("Error al obtener el tarifario cliente valorizado:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
