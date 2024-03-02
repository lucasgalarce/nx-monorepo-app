import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity'; // Asegúrate de tener esta clase de entidad definida para GraphQL
import { Listing } from '../../listing/entity/listing.entity';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  // @ResolveField('listings', (returns) => [Listing])
  // async getListings(@Parent() user: User) {
  //   const { id } = user;
  //   return this.userService.findListingsByUserId(id);
  // }
}
