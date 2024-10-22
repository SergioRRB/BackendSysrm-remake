import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SelectionClienteDto {
  @IsNotEmpty({ message: "El ID del cliente no debe estar vacío" })
  @IsNumber({}, { message: "El ID del cliente debe ser un número" })
  id_cliente!: number;

  @IsNotEmpty({ message: "El ID del área no debe estar vacío" })
  @IsNumber({}, { message: "El ID del área debe ser un número" })
  id_area!: number;

  @IsNotEmpty({ message: "El ubigeo no debe estar vacío" })
  @IsNumber({}, { message: "El ubigeo debe ser un número" })
  ubigeo!: number;

  @IsNotEmpty({ message: "El tipo de tarifario no debe estar vacío" })
  @IsString({ message: "El tipo de tarifario debe ser una cadena de texto" })
  tarifario!: string;
}
