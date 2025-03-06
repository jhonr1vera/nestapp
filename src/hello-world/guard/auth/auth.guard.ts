import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// ? Guard personalizado -> Para obtener informacion de la peticion y validarla, ej: si un usuario esta logueado con el rol de admin continua la peticion o logica del controller, caso contrario, se peta


// ? CONDICIONA LA PETICIÓN PARA FUNCIONAR

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url); //la url que llama sea '/' o '/greet o '/somethingNew', cualquier que utilice el guard

    // if (request.url === '/greet') {
    //   return false;
    // } //? si es solo greet sin consulta no pasa

    if(!request.headers['authorization']) return false

    return true;
  }
}

