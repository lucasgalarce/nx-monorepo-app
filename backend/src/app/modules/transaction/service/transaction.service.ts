import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { PrismaService } from '../../prisma/service/prisma.service';
import { Transaction } from '@prisma/client';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({
      include: {
        user: true,
        listing: true,
      },
    });
  }

  async createTransaction(
    userId: string,
    listingId: string
  ): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: {
        id: nanoid(),
        user: {
          connect: { id: userId },
        },
        listing: {
          connect: { id: listingId },
        },
      },
    });
  }
}
