import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationError,
} from "class-validator";

@ValidatorConstraint({ async: false })
export class IsStringOrNumber implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    // Validar si es un número o una cadena
    return typeof value === "number" || typeof value === "string";
  }

  defaultMessage(args: ValidationArguments): string {
    return "id_cliente_programacion debe ser un número o una cadena";
  }
}
