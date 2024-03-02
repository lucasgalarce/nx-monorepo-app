import { Query, Resolver } from '@nestjs/graphql';
import { ListingService } from '../service/listing.service';
import { Listing } from '../entity/listing.entity'; // Asegúrate de tener esta clase de entidad definida para GraphQL

@Resolver(() => Listing)
export class ListingResolver {
  constructor(private listingService: ListingService) {}

  @Query(() => [Listing])
  async listings() {
    return this.listingService.findAll();
  }
}
