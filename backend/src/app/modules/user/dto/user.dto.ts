import { OmitType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';

export class CreateUserDto extends OmitType(User, [
  'id',
  'createdAt',
  'updatedAt',
  'listings',
] as const) {}
