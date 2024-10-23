import { IsInt, IsNumber } from "class-validator";

/**
 * DTO (Data Transfer Object) para listar información de un agente.
 * Utiliza validaciones para asegurar que el ID del agente proporcionado es correcto
 * antes de ser procesado en las solicitudes.
 */
export class ListarAgenteDto {
  /**
   * ID del agente. Este campo es obligatorio y debe ser un número entero.
   * 
   * @type {number}
   * @throws {Error} - Lanza un error de validación si el ID del agente no es un número
   *                   o no es un número entero.
   */
  @IsNumber({}, { message: "El ID del cliente debe ser un número" })
  @IsInt({ message: "El ID del cliente debe ser un numero entero" })
  id_agente!: number;
}
