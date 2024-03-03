import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../../../utils/entity-base';
// import { Listing } from '../../listing/entity/listing.entity';

@ObjectType()
export class User extends BaseEntity {
  @Field()
  name: string;

  @Field()
  email: string;

  // @Field(() => [Listing], { nullable: 'itemsAndList' })
  // listings?: Listing[];
}
