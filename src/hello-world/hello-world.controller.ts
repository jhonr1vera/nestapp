import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guard/auth/auth.guard';

@Controller()
export class HelloWorldController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({ message: 'Hello World' });
  }

  @Get('new')
  @HttpCode(201)
  somethingNew() {
    return 'Something new';
  }

  @Get('notfound')
  @HttpCode(404) //para manejar codigos de respuestas
  notFoundPage() {
    return 'error 404 not found';
  }

  @Get('error')
  @HttpCode(500) //para manejar codigos de respuestas
  ErrorPage() {
    return 'Error route';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    //? ParseInPipe es para convertir el string a number si no, no funcionan las sumas
    return `ticket ${num + 15}`;
  }

  @Get('active/:status')
  getStatus(@Param('status', ParseBoolPipe) status: boolean) {
    //? ParseInPipe es para convertir el string a number si no, no funcionan las sumas
    return typeof status;
  }

  @Get('active/')
  @UseGuards(AuthGuard)
  getStatusGuard() {
    //? ParseInPipe es para convertir el string a number si no, no funcionan las sumas;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    // console.log(typeof query.name); //! los tipos no llegan como deberian, por eso se procede a crear un pipe
    console.log(typeof query.age); //! los tipos no llegan como deberian, por eso se procede a crear un pipe
    return `Hello ${query.name} you are ${query.age} years old`;

    // ? Ruta de ejemplo: localhost:3000/greet?name=jhon&age=13
  }
}
