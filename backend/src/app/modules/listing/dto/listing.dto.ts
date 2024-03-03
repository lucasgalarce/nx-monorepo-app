import { InputType, OmitType } from '@nestjs/graphql';
import { Listing } from '../entity/listing.entity';

@InputType()
export class CreateListingDto extends OmitType(
  Listing,
  ['id', 'createdAt', 'updatedAt', 'transactions'] as const,
  InputType
) {}
