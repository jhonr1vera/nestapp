import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    const {autorization} = req.headers;

    if (!autorization) {
      throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED); //? Envia excepcion al frontend
    }

    if(autorization !== 'xyz123') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); //? Envia excepcion al frontend
    }

    //* si pasa la validacion se ejecuta el siguiente recurso -> con el next

    next();
  }
}
