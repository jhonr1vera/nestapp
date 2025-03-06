import {MiddlewareConsumer, Module, NestModule, NestMiddleware } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule implements NestModule{ //? Para poder usar el middleware
  configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes(UsersController).apply(AuthMiddleware).forRoutes(UsersController); //? consume el middleware en ese controller para todas las rutas, si no se especifica poniendo entre parentesis la ruta ('users' o lo que sea) o ({path: 'users', method: RequestMethod.GET},{path: 'users', method: RequestMethod.POST}, etc...)
  //   // * El primer middleware registra peticiones, el segundo las autentica
  }
}
