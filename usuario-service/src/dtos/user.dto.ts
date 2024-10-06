import 'reflect-metadata';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El DNI del usuario no debe estar vacío' })
  @IsString({ message: 'El DNI del usuario debe ser una cadena de caracteres' })
  @Matches(/^\d{8}$/, {
    message: 'El DNI del usuario debe tener exactamente 8 caracteres numéricos',
  })
  dni_usuario!: string;

  @IsNotEmpty({ message: 'La clave del usuario no debe estar vacía' })
  @IsString({ message: 'La clave del usuario debe ser una cadena de caracteres' })
  clave_usuario!: string;

  @IsNotEmpty({ message: 'El nombre del colaborador no debe estar vacío' })
  @IsString({ message: 'El nombre del colaborador debe ser una cadena de caracteres' })
  colaborador_usuario!: string;

  @IsNotEmpty({ message: 'El brevete del usuario no debe estar vacío' })
  @IsString({ message: 'El brevete del usuario debe ser una cadena de caracteres' })
  brevete_usuario!: string;

  @IsNotEmpty({ message: 'El teléfono del usuario no debe estar vacío' })
  @IsString({ message: 'El teléfono del usuario debe ser una cadena de caracteres' })
  @Length(9, 9, { message: 'El teléfono del usuario debe tener exactamente 9 caracteres' })
  telefono_usuario!: string;

  @IsNotEmpty({ message: 'El correo electrónico no debe estar vacío' })
  @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido' })
  email_usuario!: string;

  @IsNotEmpty({ message: 'El área del usuario no debe estar vacía' })
  @IsString({ message: 'El área del usuario debe ser una cadena de caracteres' })
  area_usuario!: string;

  @IsNotEmpty({ message: 'El cargo del usuario no debe estar vacío' })
  @IsString({ message: 'El cargo del usuario debe ser una cadena de caracteres' })
  cargo_usuario!: string;

  @IsNotEmpty({ message: 'La foto del usuario no debe estar vacía' })
  @IsString({ message: 'La foto del usuario debe ser una cadena de caracteres (URL)' })
  foto_usuario!: string;

  @IsOptional()
  @IsString({ message: 'El valor de conectado debe ser una cadena de caracteres' })
  conectado: string = '0';

  @IsOptional()
  @IsString({ message: 'El valor de estado debe ser una cadena de caracteres' })
  estado: string = '1';

  @IsOptional()
  id_creador_usuario!: number;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha de creación no tiene un formato de fecha válido' })
  fecha_creado!: Date;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha de actualización no tiene un formato de fecha válido' })
  fecha_actualizado!: Date;
}


export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'El DNI del usuario debe ser una cadena de caracteres' })
  @Matches(/^\d{8}$/, {
    message: 'El DNI del usuario debe tener exactamente 8 caracteres numéricos',
  })
  dni_usuario?: string;

  @IsOptional()
  @IsString({ message: 'La clave del usuario debe ser una cadena de caracteres' })
  clave_usuario?: string;

  @IsOptional()
  @IsString({ message: 'El nombre del colaborador debe ser una cadena de caracteres' })
  colaborador_usuario?: string;

  @IsOptional()
  @IsString({ message: 'El brevete del usuario debe ser una cadena de caracteres' })
  brevete_usuario?: string;

  @IsOptional()
  @IsString({ message: 'El teléfono del usuario debe ser una cadena de caracteres' })
  @Length(9, 9, { message: 'El teléfono del usuario debe tener exactamente 9 caracteres' })
  telefono_usuario?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido' })
  email_usuario?: string;

  @IsOptional()
  @IsString({ message: 'El área del usuario debe ser una cadena de caracteres' })
  area_usuario?: string;

  @IsOptional()
  @IsString({ message: 'El cargo del usuario debe ser una cadena de caracteres' })
  cargo_usuario?: string;

  @IsOptional()
  @IsString({ message: 'La foto del usuario debe ser una cadena de caracteres (URL)' })
  foto_usuario?: string;

  @IsOptional()
  @IsString({ message: 'El valor de conectado debe ser una cadena de caracteres' })
  conectado?: string;

  @IsOptional()
  @IsString({ message: 'El valor de estado debe ser una cadena de caracteres' })
  estado?: string;

  @IsOptional()
  id_creador_usuario?: number;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha de creación no tiene un formato de fecha válido' })
  fecha_creado?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha de actualización no tiene un formato de fecha válido' })
  fecha_actualizado?: Date;
}
