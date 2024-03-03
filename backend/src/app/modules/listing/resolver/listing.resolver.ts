import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ListingService } from '../service/listing.service';
import { Listing } from '../entity/listing.entity';
import { CreateListingDto } from '../dto/listing.dto';

@Resolver(() => Listing)
export class ListingResolver {
  constructor(private listingService: ListingService) {}

  @Query(() => [Listing])
  async listings() {
    return this.listingService.findAll();
  }

  @Mutation(() => Listing)
  async createListing(
    @Args('createListingInput') createListingInput: CreateListingDto
  ) {
    return this.listingService.create(createListingInput);
  }
}
