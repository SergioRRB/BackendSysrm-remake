import 'reflect-metadata';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'El DNI no debe estar vacío' })
  @IsString({ message: 'El DNI debe ser una cadena de caracteres' })
  @Matches(/^\d{8}$/, {
    message: 'El DNI debe tener exactamente 8 caracteres numéricos',
  })
  dni!: string;

  @IsNotEmpty({ message: 'La contraseña no debe estar vacía' })
  @IsString({ message: 'La contraseña debe ser una cadena de caracteres' })
  password!: string;
}
