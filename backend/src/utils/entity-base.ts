import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class BaseEntity {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
