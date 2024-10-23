import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

/**
 * Middleware para validar un DTO (Data Transfer Object) usando class-validator y class-transformer.
 * Convierte los parámetros de la solicitud en una instancia de la clase DTO y valida sus propiedades.
 *
 * @param {any} dtoClass - La clase DTO que se utilizará para la validación.
 * @returns {Function} - Función middleware que maneja la validación.
 */
export const validateDtoCliente = (dtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Extrae los parámetros de la solicitud y los convierte a números.
    const id_cliente = Number(req.params.id_cliente);
    const id_area = Number(req.params.id_area);

    // Convierte los parámetros de la solicitud en una instancia del DTO.
    const dtoObj = plainToInstance(dtoClass, {
      ...req.params,
      id_cliente,
      id_area,
    });

    // Valida la instancia del DTO y captura los errores.
    const errors = await validate(dtoObj as object);
    if (errors.length > 0) {
      // Si hay errores de validación, responde con un error 400 y una lista de errores.
      return res.status(400).json({
        message: "Errores de validación",
        errors: errors.map((err) => err.constraints),
      });
    }

    // Si no hay errores, llama a next() para continuar con el siguiente middleware.
    next();
  };
};
