import { IsNotEmpty, IsEmail, IsNumeric, IsString } from "class-validator";

export class CreateProgramacionDto {
  @IsNotEmpty()
  @IsString()
  area_programacion!: string;

  @IsNotEmpty()
  @IsNumeric()
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
  fecha_programacion!: string;

  @IsNotEmpty()
  hora_programacion!: string;

  @IsNotEmpty()
  @IsNumeric()
  id_cliente!: number;

  @IsNotEmpty()
  @IsNumeric()
  id_creador!: number;

  @IsNotEmpty()
  @IsNumeric()
  id_orden_servicio!: number;

  @IsNotEmpty()
  @IsNumeric()
  metros_cubicos_programacion!: number;

  @IsNotEmpty()
  @IsNumeric()
  peso_mercancia_programacion!: number;

  @IsNotEmpty()
  @IsNumeric()
  peso_volumen_programacion!: number;

  @IsNotEmpty()
  @IsString()
  referencias_programacion!: string;

  @IsNotEmpty()
  @IsNumeric()
  telefono_programacion!: number;

  @IsNotEmpty()
  @IsString()
  ubigeo_programacion!: string;
}
