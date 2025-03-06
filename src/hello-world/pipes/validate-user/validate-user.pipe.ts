import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
//? Pipe personalizado de validacion

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const ageNumber = parseInt(value.age.toString(), 10);

    if (isNaN(ageNumber)) {
      //! if is not a number Error
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: ageNumber}; //? lo convierte y lo retorna
  }
}
