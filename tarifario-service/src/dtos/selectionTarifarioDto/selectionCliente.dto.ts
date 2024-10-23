import { IsNotEmpty, IsNumber, IsString } from "class-validator";

/**
 * DTO (Data Transfer Object) para seleccionar un cliente en función de ciertos parámetros.
 * Utiliza validaciones para asegurar que los datos proporcionados son correctos
 * antes de ser procesados en las solicitudes.
 */
export class SelectionClienteDto {
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

  /**
   * Ubigeo relacionado con el cliente. Este campo es obligatorio y debe ser un número.
   * 
   * @type {number}
   * @throws {Error} - Lanza un error de validación si el ubigeo está vacío o no es un número.
   */
  @IsNotEmpty({ message: "El ubigeo no debe estar vacío" })
  @IsNumber({}, { message: "El ubigeo debe ser un número" })
  ubigeo!: number;

  /**
   * Tipo de tarifario asociado al cliente. Este campo es obligatorio y debe ser una cadena de texto.
   * 
   * @type {string}
   * @throws {Error} - Lanza un error de validación si el tipo de tarifario está vacío o no es una cadena de texto.
   */
  @IsNotEmpty({ message: "El tipo de tarifario no debe estar vacío" })
  @IsString({ message: "El tipo de tarifario debe ser una cadena de texto" })
  tarifario!: string;
}
