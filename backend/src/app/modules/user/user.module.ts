import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
// import { UserController } from './controller/user.controller';
import { PrismaService } from '../prisma/service/prisma.service';

@Module({
  providers: [UserService, UserResolver, PrismaService],
  exports: [UserService],
  // controllers: [UserController],
})
export class UserModule {}
