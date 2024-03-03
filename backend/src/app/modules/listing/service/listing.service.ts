import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { Listing } from '@prisma/client';
import { PrismaService } from '../../prisma/service/prisma.service';
import { CreateListingDto } from '../dto/listing.dto';

@Injectable()
export class ListingService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Listing[]> {
    return this.prisma.listing.findMany({
      include: {
        transactions: true,
      },
    });
  }

  async create(createListingDto: CreateListingDto): Promise<Listing> {
    const listing = {
      id: nanoid(),
      ...createListingDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.prisma.listing.create({ data: listing });
  }
}
