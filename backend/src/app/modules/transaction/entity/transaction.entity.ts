import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../../../utils/entity-base';
import { User } from '../../user/entity/user.entity';
import { Listing } from '../../listing/entity/listing.entity';

@ObjectType()
export class Transaction extends BaseEntity {
  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @Field(() => Listing)
  listing: Listing;

  @Field()
  listingId: string;
}
