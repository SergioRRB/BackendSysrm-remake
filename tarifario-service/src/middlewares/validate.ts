import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { plainToClass } from "class-transformer";

export const validateDtoCliente = (dtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Convertir parámetros a número temporalmente
    const id_cliente = Number(req.params.id_cliente);
    const id_area = Number(req.params.id_area);

    // Asignar los valores convertidos en el objeto DTO
    const dtoObj = plainToInstance(dtoClass, {
      ...req.params,
      id_cliente,
      id_area,
    });

    const errors = await validate(dtoObj as object);
    if (errors.length > 0) {
      return res.status(400).json({
        message: "Errores de validación",
        errors: errors.map((err) => err.constraints),
      });
    }
    next();
  };
};
