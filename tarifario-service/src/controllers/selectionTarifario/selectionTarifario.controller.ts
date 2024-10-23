import { Request, Response } from "express";
import { SelectionTarifarioService } from "../../services/selectionTarifarioService/selectionTarifario.service";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { SelectionClienteDto } from "../../dtos/selectionTarifarioDto/selectionCliente.dto";

const selectionTarifarioService = new SelectionTarifarioService();

/**
 * Controlador para gestionar las operaciones relacionadas con el tarifario de selección.
 * Proporciona métodos para obtener tarifas basadas en el cliente y área especificados.
 */
export class SelectionTarifarioController {
  /**
   * Obtiene el tarifario basado en los parámetros del cliente, área y ubigeo.
   *
   * Esta función maneja la solicitud HTTP para obtener los datos de tarifas
   * utilizando los parámetros proporcionados en la consulta. Se valida la entrada
   * utilizando un DTO. Si la validación falla, se devuelve un mensaje de error 400.
   * En caso de un error interno al obtener los datos, se devuelve un mensaje de error 500.
   *
   * @param {Request} req - El objeto de solicitud de Express que contiene los parámetros de consulta.
   * @param {Response} res - El objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
   * @returns {Promise<Response<any>>} - Retorna una promesa que se resuelve en un objeto de respuesta JSON
   *                                     que contiene los datos de tarifas o un mensaje de error en caso de fallo.
   *
   * @throws {Error} - Lanza un error si se produce un problema interno al obtener los datos de tarifas.
   */
  async getTarifario(req: Request, res: Response) {
    // Convertir los parámetros de consulta a un DTO
    const dto = plainToInstance(SelectionClienteDto, {
      id_cliente: Number(req.query.id_cliente),
      id_area: Number(req.query.id_area),
      ubigeo: Number(req.query.ubigeo),
      tarifario: req.query.tarifario,
    });

    // Validar los datos del DTO
    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json({
        message: "Error en la validación de los parámetros.",
        errors: errors.map((err) => err.constraints),
      });
    }

    try {
      // Obtener las tarifas utilizando el servicio
      const tarifas = await selectionTarifarioService.obtenerTarifarioUbigeo(
        dto.id_cliente,
        dto.id_area,
        dto.ubigeo,
        dto.tarifario,
      );

      // Devolver los datos en la respuesta
      return res.json(tarifas);
    } catch (error) {
      console.error("Error fetching tarifario:", error);
      return res.status(500).json({ message: "Error fetching tarifario." });
    }
  }
}
