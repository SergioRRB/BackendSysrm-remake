import { IsInt, IsNumber } from "class-validator";

export class ListarAgenteDto {
  @IsNumber({}, { message: "El ID del cliente debe ser un número" })
  @IsInt({ message: "El ID del cliente debe ser un numero entero" })
  id_agente!: number;
}
