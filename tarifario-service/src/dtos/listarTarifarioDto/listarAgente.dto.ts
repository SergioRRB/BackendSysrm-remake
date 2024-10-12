import { IsNotEmpty, IsNumber } from "class-validator";

export class ListarAgenteDto {
  @IsNumber()
  @IsNotEmpty()
  id_agente!: number;
}
