import 'reflect-metadata';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, IsNumber } from 'class-validator';

export class CreateAreaDto {
  @IsNotEmpty({ message: 'El ID del cliente no debe estar vacío' })
  @IsNumber({}, { message: 'El ID del cliente debe ser un número' })
  id_cliente_area!: number;

  @IsNotEmpty({ message: 'El nombre del área no debe estar vacío' })
  @IsString({ message: 'El nombre del área debe ser una cadena de caracteres' })
  nombre_area!: string;

  @IsNotEmpty({ message: 'El contacto del área no debe estar vacío' })
  @IsString({ message: 'El contacto del área debe ser una cadena de caracteres' })
  contacto_area!: string;

  @IsNotEmpty({ message: 'El cargo del contacto no debe estar vacío' })
  @IsString({ message: 'El cargo del contacto debe ser una cadena de caracteres' })
  cargo_contacto_area!: string;

  @IsNotEmpty({ message: 'El teléfono del área no debe estar vacío' })
  @IsString({ message: 'El teléfono del área debe ser una cadena de caracteres' })
  @Length(9, 9, { message: 'El teléfono del área debe tener exactamente 9 caracteres' })
  telefono_area!: string;

  @IsNotEmpty({ message: 'El correo electrónico del área no debe estar vacío' })
  @IsEmail({}, { message: 'El correo electrónico del área no tiene un formato válido' })
  email_area!: string;

  @IsNotEmpty({ message: 'El contacto extra del área no debe estar vacío' })
  @IsString({ message: 'El contacto extra del área debe ser una cadena de caracteres' })
  contacto_extra_area!: string;

  @IsNotEmpty({ message: 'El teléfono extra del área no debe estar vacío' })
  @IsString({ message: 'El teléfono extra del área debe ser una cadena de caracteres' })
  @Length(9, 9, { message: 'El teléfono extra del área debe tener exactamente 9 caracteres' })
  telefono_extra_area!: string;

  @IsNotEmpty({ message: 'El correo electrónico extra del área no debe estar vacío' })
  @IsEmail({}, { message: 'El correo electrónico extra del área no tiene un formato válido' })
  email_extra_area!: string;
}

export class UpdateAreaDto {
  @IsOptional()
  @IsNumber({}, { message: 'El ID del cliente debe ser un número' })
  id_cliente_area?: number;

  @IsOptional()
  @IsString({ message: 'El nombre del área debe ser una cadena de caracteres' })
  nombre_area?: string;

  @IsOptional()
  @IsString({ message: 'El contacto del área debe ser una cadena de caracteres' })
  contacto_area?: string;

  @IsOptional()
  @IsString({ message: 'El cargo del contacto debe ser una cadena de caracteres' })
  cargo_contacto_area?: string;

  @IsOptional()
  @IsString({ message: 'El teléfono del área debe ser una cadena de caracteres' })
  @Length(9, 9, { message: 'El teléfono del área debe tener exactamente 9 caracteres' })
  telefono_area?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo electrónico del área no tiene un formato válido' })
  email_area?: string;

  @IsOptional()
  @IsString({ message: 'El contacto extra del área debe ser una cadena de caracteres' })
  contacto_extra_area?: string;

  @IsOptional()
  @IsString({ message: 'El teléfono extra del área debe ser una cadena de caracteres' })
  @Length(9, 9, { message: 'El teléfono extra del área debe tener exactamente 9 caracteres' })
  telefono_extra_area?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo electrónico extra del área no tiene un formato válido' })
  email_extra_area?: string;
}
