import { IsEmail, IsNotEmpty, IsString, Length, IsNumber, IsOptional } from 'class-validator';

export class ListarClienteDto {
  @IsNotEmpty({ message: 'El ID del cliente no debe estar vacío' })
  @IsString({ message: 'El ID del cliente debe ser una cadena de caracteres' })
  id_cliente!: string;

  @IsNotEmpty({ message: 'El nombre del cliente no debe estar vacío' })
  @IsString({ message: 'El nombre del cliente debe ser una cadena de caracteres' })
  nombre_cliente!: string;
}
