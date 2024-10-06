import 'reflect-metadata';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, IsNumber, IsDecimal, Matches } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty({ message: 'El DNI del cliente no debe estar vacío' })
  @IsString({ message: 'El DNI del cliente debe ser una cadena de caracteres' })
  @Matches(/^(\d{8}|\d{11})$/, {
    message: 'El DNI del cliente debe tener exactamente 8 o 11 caracteres numéricos',
  })
  dni_cliente!: string;

  @IsNotEmpty({ message: 'La razón social del cliente no debe estar vacía' })
  @IsString({ message: 'La razón social del cliente debe ser una cadena de caracteres' })
  razon_social_cliente!: string;

  @IsNotEmpty({ message: 'El representante del cliente no debe estar vacío' })
  @IsString({ message: 'El representante del cliente debe ser una cadena de caracteres' })
  representante_cliente!: string;

  @IsNotEmpty({ message: 'La clave del cliente no debe estar vacía' })
  @IsString({ message: 'La clave del cliente debe ser una cadena de caracteres' })
  clave_cliente!: string;

  @IsNotEmpty({ message: 'El ID del vendedor no debe estar vacío' })
  @IsNumber({}, { message: 'El ID del vendedor debe ser un número' })
  id_vendedor_usuario_cliente!: number;

  @IsNotEmpty({ message: 'El límite de crédito no debe estar vacío' })
  @IsDecimal({ decimal_digits: '4' }, { message: 'El límite de crédito debe ser un número con hasta 4 decimales' })
  limite_credito_cliente!: number;

  @IsNotEmpty({ message: 'La alerta de crédito no debe estar vacía' })
  @IsDecimal({ decimal_digits: '4' }, { message: 'La alerta de crédito debe ser un número con hasta 4 decimales' })
  alerta_credito_cliente!: number;

  @IsNotEmpty({ message: 'El ubigeo no debe estar vacío' })
  @IsString({ message: 'El ubigeo debe ser una cadena de caracteres' })
  ubigeo_cliente!: string;

  @IsNotEmpty({ message: 'La dirección del cliente no debe estar vacía' })
  @IsString({ message: 'La dirección del cliente debe ser una cadena de caracteres' })
  direccion_cliente!: string;

  @IsNotEmpty({ message: 'Las referencias del cliente no deben estar vacías' })
  @IsString({ message: 'Las referencias del cliente deben ser una cadena de caracteres' })
  referencias_cliente!: string;

  @IsNotEmpty({ message: 'El contacto del cliente no debe estar vacío' })
  @IsString({ message: 'El contacto del cliente debe ser una cadena de caracteres' })
  contacto_cliente!: string;

  @IsNotEmpty({ message: 'El teléfono del cliente no debe estar vacío' })
  @IsString({ message: 'El teléfono del cliente debe ser una cadena de caracteres' })
  @Length(9, 9, { message: 'El teléfono del cliente debe tener exactamente 9 caracteres' })
  telefono_cliente!: string;

  @IsNotEmpty({ message: 'El correo electrónico no debe estar vacío' })
  @IsEmail({}, { message: 'El correo electrónico no tiene un formato válido' })
  email_cliente!: string;

  @IsNotEmpty({ message: 'El área del cliente no debe estar vacía' })
  @IsString({ message: 'El área del cliente debe ser una cadena de caracteres' })
  area_cliente!: string;

  @IsNotEmpty({ message: 'El logo del cliente no debe estar vacío' })
  @IsString({ message: 'El logo del cliente debe ser una cadena de caracteres' })
  logo_cliente!: string;

  @IsOptional()
  @IsNumber({}, { message: 'El ID del creador debe ser un número' })
  id_creador_cliente?: number;

  @IsOptional()
  @IsString({ message: 'El estado debe ser una cadena de caracteres' })
  estado?: string;

  @IsOptional()
  fecha_creado?: Date;

  @IsOptional()
  fecha_actualizado?: Date;
}

export class UpdateClientDto extends CreateClientDto {
  @IsOptional()
  dni_cliente !: string;

  @IsOptional()
  razon_social_cliente !: string;

  @IsOptional()
  representante_cliente !: string;

  @IsOptional()
  clave_cliente !: string;

  @IsOptional()
  id_vendedor_usuario_cliente !: number;

  @IsOptional()
  limite_credito_cliente !: number;

  @IsOptional()
  alerta_credito_cliente !: number;

  @IsOptional()
  ubigeo_cliente !: string;

  @IsOptional()
  direccion_cliente !: string;

  @IsOptional()
  referencias_cliente !: string;

  @IsOptional()
  contacto_cliente !: string;

  @IsOptional()
  telefono_cliente !: string;

  @IsOptional()
  email_cliente !: string;

  @IsOptional()
  area_cliente !: string;

  @IsOptional()
  logo_cliente !: string;

  @IsOptional()
  id_creador_cliente ?: number;

  @IsOptional()
  estado?: string;
}
