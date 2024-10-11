import { NextFunction, Request, Response } from "express";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export const validateDto = (dtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToInstance(dtoClass, req.body);
    const errors = await validate(dtoObject);

    if (errors.length > 0) {
      console.error("Errores de validación:", errors);

      return res.status(400).json({
        message: "Error de validación",
        errors: errors.map((err) => ({
          property: err.property,
          constraints: err.constraints,
        })),
      });
    }

    next();
  };
};
