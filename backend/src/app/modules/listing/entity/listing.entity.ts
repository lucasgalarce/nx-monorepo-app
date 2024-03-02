import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'backend/src/utils/entity-base';
import { User } from '../../user/entity/user.entity';

@ObjectType()
export class Listing extends BaseEntity {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float)
  price: number;

  @Field()
  address1: string;

  @Field({ nullable: true })
  address2?: string;

  @Field()
  state: string;

  @Field()
  zipcode: string;

  @Field(() => User, { nullable: true })
  user: User;

  @Field({ nullable: true })
  userId: string;
}
