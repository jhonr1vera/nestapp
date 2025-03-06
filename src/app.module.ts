import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloWorldController } from './hello-world/hello-world.controller';
import { PaymentsModule } from './payments/payments.module';

// ! Modulo principal de la aplicacion

// ! une el controller y el service
@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, PaymentsModule],
  controllers: [HelloWorldController],
})
export class AppModule {}

// ? Notas de analisis
// ! controller llama el service

//? Comandos de generacion (nest generate --help)
// Para automatizar la craeacion de un modulo se puede usar: nest generate module <name> -> sin signos
// nest g controller -> crea controladores

// ?PIPES = crear pipes nest g pipe <route>/<name>

// ?GUARDS = crear guards nest g guard <route>/<name>

// ?Middlewares = crear middlewares nest g middleware <route>/<name>

//? Comando para crear todo los recursos: nest g resource <name


// * Levante de base con Prisma(TypeORM) y un container en docker

// ? Swagers
