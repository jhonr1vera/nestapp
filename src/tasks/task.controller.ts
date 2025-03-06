// * segundo archivo, creas tu controllador, que sera llamado por tu modulo
// * para invocar un servicio hay que inyectar el servicio en el controller a traves de un constructor

import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Patch,
  Body,
  Query,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTasksDto as Task } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

//? logic controller (buscar en bd, peticiones a otras API, etc) o invocas el servicio -> maneja la peticion

@Controller('/tasks')
export class TaskController {
  taskService: TaskService; //? para recibir el parametro se debe definir este tipo de dato

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  @Get() //? route -> pero como es la misma ruta para todos los metodos se puede colocar en el decorador controller
  @ApiOperation({ summary: 'Task controller' })
  @ApiResponse({ status: 200, description: 'Return all tasks' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getAllTask(@Query() query: any) {
    console.log(query);
    return this.taskService.getTasks();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get task by id' })
  getTask(@Param('id') id: string) {
    return this.taskService.getOneTask(parseInt(id));
  }

  @Post()
  @UsePipes(new ValidationPipe()) //? UsePipes es un decorador que se utiliza para validar los datos de la solicitud, si le envio una solicitud con datos no validos me va a arrojar un error
  createTasks(@Body() task: Task) {
    console.log(task);
    return this.taskService.createTasks(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.taskService.updateTask(task);
  }

  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch() //? actualiza una porcion, en cambio el put la tarea completa
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }

  @Get('/testing')
  testingController() {
    return this.taskService.testing();
  }
}

//?Query, es para darle parametros a nuestra solicitud, ej -> localhost:3000/tasks?limit=2 o localhost:3000/tasks?title=task1 a partir del simbolo ? detecta el query
//? Body -> recibe el body de la solicitud

//* ej query con parametros y querys https://api.ejemplo.com/usuarios/12345/perfil?ordenar=asc&limite=10
