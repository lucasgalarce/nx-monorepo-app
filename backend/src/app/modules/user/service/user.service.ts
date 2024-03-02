import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { nanoid } from 'nanoid';
import { User } from '@prisma/client';
import { PrismaService } from '../../prisma/service/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = {
      id: nanoid(),
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.prisma.user.create({ data: user });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
