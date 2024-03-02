import { Injectable } from '@nestjs/common';
// import { CreateListingDto } from '../dto/listing.dto';
import { nanoid } from 'nanoid';
import { Listing } from '@prisma/client';
import { PrismaService } from '../../prisma/service/prisma.service';
import { CreateListingDto } from '../dto/listing.dto';

@Injectable()
export class ListingService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Listing[]> {
    return this.prisma.listing.findMany();
  }

  // async create(createListingDto: CreateListingDto): Promise<User> {
  //   const user = {
  //     id: nanoid(),
  //     ...createListingDto,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   };

  //   return this.prisma.user.create({ data: user });
  // }

  async createListingForUser(
    userId: string,
    listingData: CreateListingDto
  ): Promise<Listing> {
    return this.prisma.listing.create({
      data: {
        ...listingData,
        userId: userId,
      },
    });
  }
}
