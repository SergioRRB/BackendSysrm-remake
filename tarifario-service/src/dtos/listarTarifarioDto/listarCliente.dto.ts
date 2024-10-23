import { IsNotEmpty, IsNumber } from "class-validator";

/**
 * DTO (Data Transfer Object) para listar información de un cliente.
 * Utiliza validaciones para asegurar que los datos proporcionados son correctos
 * antes de ser procesados en las solicitudes.
 */
export class ListarClienteDto {
  /**
   * ID del cliente. Este campo es obligatorio y debe ser un número.
   * 
   * @type {number}
   * @throws {Error} - Lanza un error de validación si el ID del cliente está vacío o no es un número.
   */
  @IsNotEmpty({ message: "El ID del cliente no debe estar vacío" })
  @IsNumber({}, { message: "El ID del cliente debe ser un número" })
  id_cliente!: number;

  /**
   * ID del área asociada al cliente. Este campo es obligatorio y debe ser un número.
   * 
   * @type {number}
   * @throws {Error} - Lanza un error de validación si el ID del área está vacío o no es un número.
   */
  @IsNotEmpty({ message: "El ID del área no debe estar vacío" })
  @IsNumber({}, { message: "El ID del área debe ser un número" })
  id_area!: number;
}
