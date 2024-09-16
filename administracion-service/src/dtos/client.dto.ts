import 'reflect-metadata';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, IsNumber, IsDecimal, Matches } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^(\d{8}|\d{11})$/, {
    message: 'dni_usuario debe tener exactamente 8 o 11 caracteres numéricos',
  })
  dni_cliente!: string;

  @IsNotEmpty()
  @IsString()
  razon_social_cliente!: string;

  @IsNotEmpty()
  @IsString()
  representante_cliente!: string;

  @IsNotEmpty()
  @IsString()
  clave_cliente!: string;

  @IsNotEmpty()
  @IsNumber()
  id_vendedor_usuario_cliente!: number;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '4' })
  limite_credito_cliente!: number;

  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '4' })
  alerta_credito_cliente!: number;

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  ubigeo_cliente!: string;

  @IsNotEmpty()
  @IsString()
  direccion_cliente!: string;

  @IsNotEmpty()
  @IsString()
  referencias_cliente!: string;

  @IsNotEmpty()
  @IsString()
  contacto_cliente!: string;

  @IsNotEmpty()
  @IsString()
  @Length(9, 9)
  telefono_cliente!: string;

  @IsNotEmpty()
  @IsEmail()
  email_cliente!: string;

  @IsNotEmpty()
  @IsString()
  area_cliente!: string;

  @IsNotEmpty()
  @IsString()
  logo_cliente!: string;

  @IsOptional()
  @IsNumber()
  id_creador_cliente?: number;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  fecha_creado?: Date;

  @IsOptional()
  fecha_actualizado?: Date;
}

export class UpdateClientDto {
  @IsOptional()
  @IsString()
  @Length(11, 11)
  dni_cliente?: string;

  @IsOptional()
  @IsString()
  razon_social_cliente?: string;

  @IsOptional()
  @IsString()
  representante_cliente?: string;

  @IsOptional()
  @IsString()
  clave_cliente?: string;

  @IsOptional()
  @IsNumber()
  id_vendedor_usuario_cliente?: number;

  @IsOptional()
  @IsDecimal({ decimal_digits: '4' })
  limite_credito_cliente?: number;

  @IsOptional()
  @IsDecimal({ decimal_digits: '4' })
  alerta_credito_cliente?: number;

  @IsOptional()
  @IsString()
  @Length(11, 11)
  ubigeo_cliente?: string;

  @IsOptional()
  @IsString()
  direccion_cliente?: string;

  @IsOptional()
  @IsString()
  referencias_cliente?: string;

  @IsOptional()
  @IsString()
  contacto_cliente?: string;

  @IsOptional()
  @IsString()
  @Length(9, 9)
  telefono_cliente?: string;

  @IsOptional()
  @IsEmail()
  email_cliente?: string;

  @IsOptional()
  @IsString()
  area_cliente?: string;

  @IsOptional()
  @IsString()
  logo_cliente?: string;

  @IsOptional()
  @IsNumber()
  id_creador_cliente?: number;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  fecha_creado?: Date;

  @IsOptional()
  fecha_actualizado?: Date;
}
