import {
  IsNotEmpty,
  IsEmail,
  IsNumber,
  IsString,
  IsOptional,
} from "class-validator";
import { IsStringOrNumber } from "./validators/IsStringOrNumber"; // Crea el validador personalizado

export class CreateProgramacionDto {
  @IsNotEmpty()
  @IsString()
  area_programacion!: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad_bultos_programacion!: number;

  @IsNotEmpty()
  @IsString()
  contacto_programacion!: string;

  @IsNotEmpty()
  @IsEmail()
  correo_programacion!: string;

  @IsNotEmpty()
  @IsString()
  descripcion_mercancia_programacion!: string;

  @IsNotEmpty()
  @IsString()
  direccion_programacion!: string;

  @IsNotEmpty()
  fecha_programacion!: Date;

  @IsNotEmpty()
  hora_programacion!: string;

  // Remove @IsNotEmpty() and add @IsOptional() to allow `null` or undefined
  @IsOptional()
  id_cliente_programacion?: null;

  @IsNotEmpty()
  @IsNumber()
  id_creador_programacion!: number;

  @IsNotEmpty()
  @IsString()
  id_orden_servicio!: string;

  @IsNotEmpty()
  @IsNumber()
  metros_cubicos_programacion!: number;

  @IsNotEmpty()
  @IsNumber()
  peso_mercancia_programacion!: number;

  @IsNotEmpty()
  @IsNumber()
  peso_volumen_programacion!: number;

  @IsNotEmpty()
  @IsString()
  referencias_programacion!: string;

  @IsNotEmpty()
  @IsString()
  telefono_programacion!: string;

  @IsNotEmpty()
  @IsString()
  ubigeo_programacion!: string;
}
