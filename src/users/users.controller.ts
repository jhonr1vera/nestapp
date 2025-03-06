import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {} //! para entender esta manera abreviada, revisar TaskController

  @Get()
  getAllUsers() {
    return this.usersService.getUser();
  }

  @Post()
  // @UsePipes(new ValidationPipe()) //? Puse la validation de manera global, eso reemplaza esto
  createUser(@Body() user) {
    return this.usersService.createUser(user);
  }
}
