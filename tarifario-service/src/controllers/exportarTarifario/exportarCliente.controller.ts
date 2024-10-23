import { Request, Response } from "express";
import { ExportarTarifarioClienteCargaService } from "../../services/exportarTarifarioService/ClienteTarifario/exportCargas/exportarCarga.service";
import { ExportarTarifarioClienteValorizadoService } from "../../services/exportarTarifarioService/ClienteTarifario/exportValorizados/exportarValorizado.service";
import { ExportarTarifarioClienteAereoService } from "../../services/exportarTarifarioService/ClienteTarifario/exportAereos/exportarAereo.service";
import { ExportarTarifarioClienteCourrierService } from "../../services/exportarTarifarioService/ClienteTarifario/exportCourriers/exportarCourrier.service";

/**
 * Exporta la información de tarifas para un cliente aéreo específico.
 *
 * Esta función maneja la solicitud HTTP para exportar datos de precios relacionados con
 * el transporte aéreo para un cliente y área específicos. Se espera que los IDs del cliente
 * y del área se proporcionen en los parámetros de la URL.
 *
 * @param {Request} req - Objeto de solicitud de Express que contiene los parámetros necesarios.
 * @param {Response} res - Objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON con los datos de tarifas
 *                                     o un mensaje de error en caso de fallo.
 *
 * @throws {Error} - Lanza un error si se produce un problema interno durante el proceso de exportación.
 */
export const exportarTarifaClienteAereo = async (req: Request, res: Response): Promise<Response<any>> => {
  try {
    // Extracción de los parámetros de la URL
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    // Llamada al servicio para obtener las tarifas aéreas del cliente
    const expClienteAereo =
      await ExportarTarifarioClienteAereoService.aereoCliente(
        id_cliente,
        id_area,
      );
    
    // Retorno de la respuesta exitosa
    return res.json(expClienteAereo);
  } catch (error) {
    console.error("Error al exportar tarifarios de cliente aéreo:", error);
    // En caso de error, retorno de un mensaje de error con estado 500
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

/**
 * Exporta la información de tarifas para un cliente de carga específico.
 *
 * Esta función maneja la solicitud HTTP para exportar datos de precios relacionados con
 * el transporte de carga para un cliente y área específicos. Se espera que los IDs del cliente
 * y del área se proporcionen en los parámetros de la URL.
 *
 * @param {Request} req - Objeto de solicitud de Express que contiene los parámetros necesarios.
 * @param {Response} res - Objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON con los datos de tarifas
 *                                     o un mensaje de error en caso de fallo.
 *
 * @throws {Error} - Lanza un error si se produce un problema interno durante el proceso de exportación.
 */
export const exportarTarifaClienteCarga = async (req: Request, res: Response): Promise<Response<any>> => {
  try {
    // Extracción de los parámetros de la URL
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    // Llamada al servicio para obtener las tarifas de carga del cliente
    const expClienteCarga =
      await ExportarTarifarioClienteCargaService.cargaCliente(
        id_cliente,
        id_area,
      );
    
    // Retorno de la respuesta exitosa
    return res.json(expClienteCarga);
  } catch (error) {
    console.error("Error al exportar tarifarios de cliente carga:", error);
    // En caso de error, retorno de un mensaje de error con estado 500
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

/**
 * Exporta la información de tarifas para un cliente de courrier específico.
 *
 * Esta función maneja la solicitud HTTP para exportar datos de precios relacionados con
 * servicios de courrier para un cliente y área específicos. Se espera que los IDs del cliente
 * y del área se proporcionen en los parámetros de la URL.
 *
 * @param {Request} req - Objeto de solicitud de Express que contiene los parámetros necesarios.
 * @param {Response} res - Objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON con los datos de tarifas
 *                                     o un mensaje de error en caso de fallo.
 *
 * @throws {Error} - Lanza un error si se produce un problema interno durante el proceso de exportación.
 */
export const exportarTarifaClienteCourrier = async (req: Request, res: Response): Promise<Response<any>> => {
  try {
    // Extracción de los parámetros de la URL
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    // Llamada al servicio para obtener las tarifas de courrier del cliente
    const expClienteCourrier =
      await ExportarTarifarioClienteCourrierService.courrierCliente(
        id_cliente,
        id_area,
      );
    
    // Retorno de la respuesta exitosa
    return res.json(expClienteCourrier);
  } catch (error) {
    console.error("Error al exportar tarifarios de cliente courrier:", error);
    // En caso de error, retorno de un mensaje de error con estado 500
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

/**
 * Exporta la información de tarifas para un cliente valorizado específico.
 *
 * Esta función maneja la solicitud HTTP para exportar datos de precios relacionados con
 * clientes valorizados para un cliente y área específicos. Se espera que los IDs del cliente
 * y del área se proporcionen en los parámetros de la URL.
 *
 * @param {Request} req - Objeto de solicitud de Express que contiene los parámetros necesarios.
 * @param {Response} res - Objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON con los datos de tarifas
 *                                     o un mensaje de error en caso de fallo.
 *
 * @throws {Error} - Lanza un error si se produce un problema interno durante el proceso de exportación.
 */
export const exportarTarifaClienteValorizado = async (req: Request, res: Response): Promise<Response<any>> => {
  try {
    // Extracción de los parámetros de la URL
    const id_cliente = parseInt(req.params.id_cliente);
    const id_area = parseInt(req.params.id_area);

    // Llamada al servicio para obtener las tarifas valorizadas del cliente
    const expClienteValorizado =
      await ExportarTarifarioClienteValorizadoService.valorizadoCliente(
        id_cliente,
        id_area,
      );
    
    // Retorno de la respuesta exitosa
    return res.json(expClienteValorizado);
  } catch (error) {
    console.error("Error al exportar tarifarios de cliente valorizado:", error);
    // En caso de error, retorno de un mensaje de error con estado 500
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};
