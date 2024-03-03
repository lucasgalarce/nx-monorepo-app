import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../../../utils/entity-base';
import { Transaction } from '../../transaction/entity/transaction.entity';

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

  @Field(() => [Transaction], { nullable: 'itemsAndList' })
  transactions?: Transaction[];
}
