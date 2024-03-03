import { Module } from '@nestjs/common';
import { TransactionService } from './service/transaction.service';
import { TransactionResolver } from './resolver/transaction.resolver';
import { PrismaService } from '../prisma/service/prisma.service';

@Module({
  providers: [TransactionService, TransactionResolver, PrismaService],
})
export class TransactionModule {}
