import { Module } from '@nestjs/common';
import { ListingService } from './service/listing.service';
import { ListingResolver } from './resolver/listing.resolver';
import { PrismaService } from '../prisma/service/prisma.service';

@Module({
  providers: [ListingService, ListingResolver, PrismaService],
  exports: [ListingService],
})
export class ListingModule {}
