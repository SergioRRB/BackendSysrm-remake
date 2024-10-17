import { IsNotEmpty, IsNumber } from "class-validator";

export class ExportarClienteDto {
  @IsNotEmpty({ message: "El ID del cliente no debe estar vacío" })
  @IsNumber({}, { message: "El ID del cliente debe ser un número" })
  id_cliente!: number;

  @IsNotEmpty({ message: "El ID del área no debe estar vacío" })
  @IsNumber({}, { message: "El ID del área debe ser un número" })
  id_area!: number;
}
