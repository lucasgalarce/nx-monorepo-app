import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
import { UserController } from './controller/user.controller';
import { PrismaService } from '../prisma/service/prisma.service';

@Module({
  providers: [UserService, UserResolver, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
