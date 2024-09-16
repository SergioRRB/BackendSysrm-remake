import 'reflect-metadata';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^(\d{8}|\d{11})$/, {
    message: 'dni_usuario debe tener exactamente 8 o 11 caracteres numéricos',
  })
  dni_usuario!: string;

  @IsNotEmpty()
  @IsString()
  clave_usuario!: string;

  @IsNotEmpty()
  @IsString()
  colaborador_usuario!: string;

  @IsNotEmpty()
  @IsString()
  brevete_usuario!: string;

  @IsNotEmpty()
  @IsString()
  @Length(9, 9)
  telefono_usuario!: string;

  @IsNotEmpty()
  @IsEmail()
  email_usuario!: string;

  @IsNotEmpty()
  @IsString()
  area_usuario!: string;

  @IsNotEmpty()
  @IsString()
  cargo_usuario!: string;

  @IsNotEmpty()
  @IsString()
  foto_usuario!: string;

  @IsOptional()
  @IsString()
  conectado: string = '0';

  @IsOptional()
  @IsString()
  estado: string = '1';

  @IsOptional()
  id_creador_usuario!: number;

  @IsOptional()
  @IsDateString()
  fecha_creado!: Date;

  @IsOptional()
  @IsDateString()
  fecha_actualizado!: Date;
}
