import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { nanoid } from 'nanoid';
import { Listing, User } from '@prisma/client';
import { PrismaService } from '../../prisma/service/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findListingsByUserId(userId: string): Promise<Listing[]> {
    // Implementa la lógica para consultar la base de datos y retornar los listados
    // asociados al userId proporcionado. Esto es un ejemplo usando Prisma:
    return this.prisma.listing.findMany({
      where: { userId },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = {
      id: nanoid(),
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.prisma.user.create({ data: user });
  }
}
