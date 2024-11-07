import { IsNotEmpty, IsEmail, IsNumber, IsString } from "class-validator";

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
  fecha_programacion!: Date; // Cambia a `Date` si necesitas validación de fecha

  @IsNotEmpty()
  hora_programacion!: string; // Cambia a `Date` si es una hora

  @IsNotEmpty()
  @IsNumber()
  id_cliente_programacion!: number;

  @IsNotEmpty()
  @IsNumber()
  id_creador_programacion!: number;

  @IsNotEmpty()
  @IsString() // Asume que es un string; ajusta si realmente es un número
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
  @IsString() // Usar `IsString` aquí si es realmente un string, ajusta si es un número
  telefono_programacion!: string;

  @IsNotEmpty()
  @IsString()
  ubigeo_programacion!: string;
}
