import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../entity/transaction.entity'; // Asegúrate de tener esta clase de entidad definida para GraphQL

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private transactionService: TransactionService) {}

  @Query(() => [Transaction])
  async transactions() {
    return this.transactionService.findAll();
  }

  @Mutation(() => Transaction)
  async purchaseListing(
    @Args('userId') userId: string,
    @Args('listingId') listingId: string
  ) {
    return this.transactionService.createTransaction(userId, listingId);
  }
}
