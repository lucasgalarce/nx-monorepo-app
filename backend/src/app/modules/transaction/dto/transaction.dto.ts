import { OmitType } from '@nestjs/graphql';
import { Transaction } from '../entity/transaction.entity';

export class CreateTransactionDto extends OmitType(Transaction, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {}
