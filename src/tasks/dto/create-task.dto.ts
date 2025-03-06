// ? Este archivo se utiliza para validar la integridad de los datos de la solicitud
export type taskId = number;
import { IsString, MinLength } from 'class-validator';

//? class validator son decoradores que funcionan como validadores de datos

export class CreateTasksDto {
  id: taskId;

  @IsString()
  @MinLength(1)
  title: string;

  @IsString() //? para que usePipes funcione hay que validar aquí
  @MinLength(1)
  description: string;
}
