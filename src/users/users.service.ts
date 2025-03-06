import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  
  constructor(private prisma: PrismaService) {}

  getUser() {
    return this.prisma.user.findMany();
  }

  createUser(user) {
    return this.prisma.user.create({data: user})
  }  
}  
