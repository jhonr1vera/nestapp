// ! tercer archivo (servicios) -> contendrá logica reutilizable con los datos
import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { CreateTasksDto as Task } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// ? HttpCode es un decorador para retornar un codigo de error

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  getOneTask(id: number) {
    const taskExist = this.tasks.find((task) => task.id === id);
    if (!taskExist) {
      return new NotFoundException('Tarea no encontrada');
    }
    return taskExist;
  }

  createTasks(task: Task) {
    this.tasks.push({
      ...task, //operador de propragacion, toma todo el objeto task y le agrega un nuevo atributo
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    // const task = this.tasks.find((task) => task.id === id);
    if (task) {
      return task;
    }
  }

  deleteTask() {
    return 'eliminando tarea';
  }

  updateTaskStatus() {
    return 'actualizando estado de la tarea';
  }

  testing() {
    return 'this is a test service';
  }
}
