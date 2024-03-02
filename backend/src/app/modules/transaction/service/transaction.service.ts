import { Injectable } from '@nestjs/common';
// import { CreateListingDto } from '../dto/listing.dto';
import { nanoid } from 'nanoid';
import { Transaction } from '@prisma/client';
import { PrismaService } from '../../prisma/service/prisma.service';
import { CreateTransactionDto } from '../dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany();
  }

  // async create(createTransactionDto: CreateTransactionDto): Promise<User> {
  //   const user = {
  //     id: nanoid(),
  //     ...createTransactionDto,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   };

  //   return this.prisma.user.create({ data: user });
  // }

  async purchaseListing(
    userId: string,
    listingId: string
  ): Promise<Transaction> {
    return this.prisma.transaction.create({
      data: {
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
