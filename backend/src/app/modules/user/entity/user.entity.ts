import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../../../utils/entity-base';

@ObjectType()
export class User extends BaseEntity {
  @Field()
  name: string;

  @Field()
  email: string;
}
