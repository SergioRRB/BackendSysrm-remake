import { Request, Response, NextFunction } from "express";
import { ClienteAereoDto } from "../../dtos/importarTarifarioDto/importarCliente.dto";
import { ClienteCargaDto } from "../../dtos/importarTarifarioDto/importarCliente.dto";
import { ClienteCourrierDto } from "../../dtos/importarTarifarioDto/importarCliente.dto";
import { ClienteValorizadoDto } from "../../dtos/importarTarifarioDto/importarCliente.dto";

/**
 * Middleware para validar los datos de entrada de los clientes aéreos.
 * Este middleware verifica que cada objeto en el cuerpo de la solicitud
 * contenga todos los campos requeridos para el cliente aéreo.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los datos enviados por el cliente.
 * @param {Response} res - El objeto de respuesta de Express que se utilizará para enviar una respuesta al cliente.
 * @param {NextFunction} next - Función que se llama para pasar el control al siguiente middleware o ruta en la cadena de procesamiento.
 * @throws {Error} Si alguno de los campos requeridos está ausente, devuelve una respuesta con un código de estado 400 y un mensaje de error.
 * @returns {void} Llama a la función next() si todos los campos son válidos y están presentes.
 */
export function validateClienteAereo(req: Request, res: Response, next: NextFunction) {
  const data_ClientesAereos: ClienteAereoDto[] = req.body;

  // Itera sobre cada elemento en el array de datos de clientes aéreos
  for (const element of data_ClientesAereos) {
    // Verifica que los campos requeridos no estén vacíos o indefinidos
    if (
      !element.kg_tarifario_cliente_aereo ||
      !element.kg_adicional_tarifario_cliente_aereo ||
      !element.tmin_tarifario_cliente_aereo ||
      !element.tmax_tarifario_cliente_aereo ||
      !element.ubigeo_tarifario_cliente_aereo
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  // Si todos los datos son válidos, pasa al siguiente middleware
  next();
}

/**
 * Middleware para validar los datos de entrada de los clientes de carga.
 * Este middleware verifica que cada objeto en el cuerpo de la solicitud
 * contenga todos los campos requeridos para el cliente de carga.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los datos enviados por el cliente.
 * @param {Response} res - El objeto de respuesta de Express que se utilizará para enviar una respuesta al cliente.
 * @param {NextFunction} next - Función que se llama para pasar el control al siguiente middleware o ruta en la cadena de procesamiento.
 * @throws {Error} Si alguno de los campos requeridos está ausente, devuelve una respuesta con un código de estado 400 y un mensaje de error.
 * @returns {void} Llama a la función next() si todos los campos son válidos y están presentes.
 */
export function validateClienteCarga(req: Request, res: Response, next: NextFunction) {
  const data_ClientesCargas: ClienteCargaDto[] = req.body.dataClientes;

  // Itera sobre cada elemento en el array de datos de clientes de carga
  for (const element of data_ClientesCargas) {
    // Verifica que los campos requeridos no estén vacíos o indefinidos
    if (
      !element.kg_maximo_tarifario_cliente_carga ||
      !element.kg_base_adicional_tarifario_cliente_carga ||
      !element.paquete_tarifario_cliente_carga ||
      !element.tmin_tarifario_cliente_carga ||
      !element.tmax_tarifario_cliente_carga ||
      !element.ubigeo_tarifario_cliente_carga
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  // Si todos los datos son válidos, pasa al siguiente middleware
  next();
}

/**
 * Middleware para validar los datos de entrada de los clientes courriers.
 * Este middleware verifica que cada objeto en el cuerpo de la solicitud
 * contenga todos los campos requeridos para el cliente courrier.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los datos enviados por el cliente.
 * @param {Response} res - El objeto de respuesta de Express que se utilizará para enviar una respuesta al cliente.
 * @param {NextFunction} next - Función que se llama para pasar el control al siguiente middleware o ruta en la cadena de procesamiento.
 * @throws {Error} Si alguno de los campos requeridos está ausente, devuelve una respuesta con un código de estado 400 y un mensaje de error.
 * @returns {void} Llama a la función next() si todos los campos son válidos y están presentes.
 */
export function validateClienteCourrier(req: Request, res: Response, next: NextFunction) {
  const data_ClientesCourriers: ClienteCourrierDto[] = req.body;

  // Itera sobre cada elemento en el array de datos de clientes courriers
  for (const element of data_ClientesCourriers) {
    // Verifica que los campos requeridos no estén vacíos o indefinidos
    if (
      !element.kg_tarifario_cliente_courrier ||
      !element.kg_adicional_tarifario_cliente_courrier ||
      !element.tmin_tarifario_cliente_courrier ||
      !element.tmax_tarifario_cliente_courrier ||
      !element.ubigeo_tarifario_cliente_courrier
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  // Si todos los datos son válidos, pasa al siguiente middleware
  next();
}

/**
 * Middleware para validar los datos de entrada de los clientes valorizados.
 * Este middleware verifica que cada objeto en el cuerpo de la solicitud
 * contenga todos los campos requeridos para el cliente valorizado.
 *
 * @param {Request} req - El objeto de solicitud de Express que contiene los datos enviados por el cliente.
 * @param {Response} res - El objeto de respuesta de Express que se utilizará para enviar una respuesta al cliente.
 * @param {NextFunction} next - Función que se llama para pasar el control al siguiente middleware o ruta en la cadena de procesamiento.
 * @throws {Error} Si alguno de los campos requeridos está ausente, devuelve una respuesta con un código de estado 400 y un mensaje de error.
 * @returns {void} Llama a la función next() si todos los campos son válidos y están presentes.
 */
export function validateClienteValorizado(req: Request, res: Response, next: NextFunction) {
  const data_ClientesValorizados: ClienteValorizadoDto[] = req.body;

  // Itera sobre cada elemento en el array de datos de clientes valorizados
  for (const element of data_ClientesValorizados) {
    // Verifica que los campos requeridos no estén vacíos o indefinidos
    if (
      !element.ubigeo_tarifario_cliente_valorizado ||
      !element.producto_tarifario_cliente_valorizado ||
      !element.costo_producto_tarifario_cliente_valorizado ||
      !element.tmin_tarifario_cliente_valorizado ||
      !element.tmax_tarifario_cliente_valorizado
    ) {
      return res.status(400).json({ message: "Datos incompletos o inválidos" });
    }
  }

  // Si todos los datos son válidos, pasa al siguiente middleware
  next();
}

