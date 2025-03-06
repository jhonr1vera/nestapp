//! Inicio de creacion de servicio de tareas

//! se debe de indicar que son clases o metodos nativos provenientes de nextjs

// ! en este caso, module es un decorador
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

//! El module debe de invocar a todos los controladores y servicios para funcionar
@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
