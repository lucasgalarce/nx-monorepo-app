import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './resolvers/app.resolver';
import { UserModule } from './modules/user/user.module';
import { ListingModule } from './modules/listing/listing.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { SeedService } from './modules/seed/service/seed.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UserModule,
    ListingModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver, SeedService],
})
export class AppModule {}
