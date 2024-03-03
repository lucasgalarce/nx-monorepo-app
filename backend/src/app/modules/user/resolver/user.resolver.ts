import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('name') name: string, @Args('email') email: string) {
    return this.userService.create({ name, email });
  }
}
