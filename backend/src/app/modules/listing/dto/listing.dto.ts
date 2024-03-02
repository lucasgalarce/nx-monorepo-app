import { OmitType } from '@nestjs/graphql';
import { Listing } from '../entity/listing.entity';

export class CreateListingDto extends OmitType(Listing, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {}
