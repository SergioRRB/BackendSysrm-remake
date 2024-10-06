import 'reflect-metadata';
import { IsNotEmpty, IsOptional, IsString, Length, IsDateString } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty({ message: 'La placa del vehículo no debe estar vacía' })
  @IsString({ message: 'La placa del vehículo debe ser una cadena de caracteres' })
  placa_vehiculo!: string;

  @IsNotEmpty({ message: 'El tipo de vehículo no debe estar vacío' })
  @IsString({ message: 'El tipo de vehículo debe ser una cadena de caracteres' })
  tipo_vehiculo!: string;

  @IsNotEmpty({ message: 'El número de serie del vehículo no debe estar vacío' })
  @IsString({ message: 'El número de serie del vehículo debe ser una cadena de caracteres' })
  n_serie_vehiculo!: string;

  @IsNotEmpty({ message: 'El SOAT del vehículo no debe estar vacío' })
  @IsString({ message: 'El SOAT del vehículo debe ser una cadena de caracteres' })
  soat_vehiculo!: string;

  @IsNotEmpty({ message: 'La vigencia desde del vehículo no debe estar vacía' })
  @IsDateString({}, { message: 'La vigencia desde del vehículo debe ser una fecha válida' })
  vigencia_desde_vehiculo!: Date;

  @IsNotEmpty({ message: 'La vigencia hasta del vehículo no debe estar vacía' })
  @IsDateString({}, { message: 'La vigencia hasta del vehículo debe ser una fecha válida' })
  vigencia_hasta_vehiculo!: Date;

  @IsNotEmpty({ message: 'La última revisión del vehículo no debe estar vacía' })
  @IsDateString({}, { message: 'La última revisión del vehículo debe ser una fecha válida' })
  ultima_revision_vehiculo!: Date;

  @IsNotEmpty({ message: 'El vencimiento del vehículo no debe estar vacío' })
  @IsDateString({}, { message: 'El vencimiento del vehículo debe ser una fecha válida' })
  vencimiento_vehiculo!: Date;

  @IsNotEmpty({ message: 'La tarjeta de propiedad del vehículo no debe estar vacía' })
  @IsString({ message: 'La tarjeta de propiedad del vehículo debe ser una cadena de caracteres' })
  tarjeta_propiedad_vehiculo!: string;

  @IsOptional()
  @IsString({ message: 'El valor de validado debe ser una cadena de caracteres' })
  validado_vehiculo: string = '1';
}

export class UpdateVehicleDto {
  @IsOptional()
  @IsString({ message: 'La placa del vehículo debe ser una cadena de caracteres' })
  placa_vehiculo?: string;

  @IsOptional()
  @IsString({ message: 'El tipo de vehículo debe ser una cadena de caracteres' })
  tipo_vehiculo?: string;

  @IsOptional()
  @IsString({ message: 'El número de serie del vehículo debe ser una cadena de caracteres' })
  n_serie_vehiculo?: string;

  @IsOptional()
  @IsString({ message: 'El SOAT del vehículo debe ser una cadena de caracteres' })
  soat_vehiculo?: string;

  @IsOptional()
  @IsDateString({}, { message: 'La vigencia desde del vehículo debe ser una fecha válida' })
  vigencia_desde_vehiculo?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'La vigencia hasta del vehículo debe ser una fecha válida' })
  vigencia_hasta_vehiculo?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'La última revisión del vehículo debe ser una fecha válida' })
  ultima_revision_vehiculo?: Date;

  @IsOptional()
  @IsDateString({}, { message: 'El vencimiento del vehículo debe ser una fecha válida' })
  vencimiento_vehiculo?: Date;

  @IsOptional()
  @IsString({ message: 'La tarjeta de propiedad del vehículo debe ser una cadena de caracteres' })
  tarjeta_propiedad_vehiculo?: string;

  @IsOptional()
  @IsString({ message: 'El valor de validado debe ser una cadena de caracteres' })
  validado_vehiculo?: string;
}
