import 'reflect-metadata';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, IsNumber, Matches } from 'class-validator';

export class CreateProviderDto {
  @IsNotEmpty({ message: 'El DNI del proveedor no debe estar vacío' })
  @IsString({ message: 'El DNI del proveedor debe ser una cadena de caracteres' })
  @Matches(/^(\d{8}|\d{11})$/, {
    message: 'El DNI del proveedor debe tener exactamente 8 o 11 caracteres numéricos',
  })
  dni_proveedor!: string;

  @IsNotEmpty({ message: 'La razón social del proveedor no debe estar vacía' })
  @IsString({ message: 'La razón social del proveedor debe ser una cadena de caracteres' })
  razon_social_proveedor!: string;

  @IsNotEmpty({ message: 'El representante del proveedor no debe estar vacío' })
  @IsString({ message: 'El representante del proveedor debe ser una cadena de caracteres' })
  representante_proveedor!: string;

  @IsNotEmpty({ message: 'La clave del proveedor no debe estar vacía' })
  @IsString({ message: 'La clave del proveedor debe ser una cadena de caracteres' })
  clave_proveedor!: string;

  @IsNotEmpty({ message: 'El tipo del proveedor no debe estar vacío' })
  @IsString({ message: 'El tipo del proveedor debe ser una cadena de caracteres' })
  tipo_proveedor!: string;

  @IsNotEmpty({ message: 'El tipo de servicio del proveedor no debe estar vacío' })
  @IsString({ message: 'El tipo de servicio del proveedor debe ser una cadena de caracteres' })
  tipo_servicio_proveedor!: string;

  @IsNotEmpty({ message: 'El ubigeo del proveedor no debe estar vacío' })
  @IsString({ message: 'El ubigeo del proveedor debe ser una cadena de caracteres' })
  @Length(11, 11, { message: 'El ubigeo del proveedor debe tener exactamente 11 caracteres' })
  ubigeo_proveedor!: string;

  @IsNotEmpty({ message: 'La dirección del proveedor no debe estar vacía' })
  @IsString({ message: 'La dirección del proveedor debe ser una cadena de caracteres' })
  direccion_proveedor!: string;

  @IsNotEmpty({ message: 'Las referencias del proveedor no deben estar vacías' })
  @IsString({ message: 'Las referencias del proveedor deben ser una cadena de caracteres' })
  referencias_proveedor!: string;

  @IsNotEmpty({ message: 'El contacto del proveedor no debe estar vacío' })
  @IsString({ message: 'El contacto del proveedor debe ser una cadena de caracteres' })
  contacto_proveedor!: string;

  @IsNotEmpty({ message: 'El teléfono del proveedor no debe estar vacío' })
  @IsString({ message: 'El teléfono del proveedor debe ser una cadena de caracteres' })
  @Length(9, 9, { message: 'El teléfono del proveedor debe tener exactamente 9 caracteres' })
  telefono_proveedor!: string;

  @IsNotEmpty({ message: 'El correo electrónico del proveedor no debe estar vacío' })
  @IsEmail({}, { message: 'El correo electrónico del proveedor no tiene un formato válido' })
  email_proveedor!: string;
}

export class UpdateProviderDto {
  @IsOptional()
  @IsString({ message: 'El DNI del proveedor debe ser una cadena de caracteres' })
  @Matches(/^(\d{8}|\d{11})$/, {
    message: 'El DNI del proveedor debe tener exactamente 8 o 11 caracteres numéricos',
  })
  dni_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'La razón social del proveedor debe ser una cadena de caracteres' })
  razon_social_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'El representante del proveedor debe ser una cadena de caracteres' })
  representante_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'La clave del proveedor debe ser una cadena de caracteres' })
  clave_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'El tipo del proveedor debe ser una cadena de caracteres' })
  tipo_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'El tipo de servicio del proveedor debe ser una cadena de caracteres' })
  tipo_servicio_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'El ubigeo del proveedor debe ser una cadena de caracteres' })
  @Length(11, 11, { message: 'El ubigeo del proveedor debe tener exactamente 11 caracteres' })
  ubigeo_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'La dirección del proveedor debe ser una cadena de caracteres' })
  direccion_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'Las referencias del proveedor deben ser una cadena de caracteres' })
  referencias_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'El contacto del proveedor debe ser una cadena de caracteres' })
  contacto_proveedor?: string;

  @IsOptional()
  @IsString({ message: 'El teléfono del proveedor debe ser una cadena de caracteres' })
  @Length(9, 9, { message: 'El teléfono del proveedor debe tener exactamente 9 caracteres' })
  telefono_proveedor?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo electrónico del proveedor no tiene un formato válido' })
  email_proveedor?: string;
}
