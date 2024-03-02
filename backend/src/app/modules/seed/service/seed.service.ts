// src/seed/seed.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { ListingService } from '../../listing/service/listing.service';
import { faker } from '@faker-js/faker';

@Injectable()
export class SeedService {
  private readonly logger = new Logger(SeedService.name);

  constructor(
    private readonly userService: UserService,
    private readonly listingService: ListingService
  ) {}

  async seed() {
    this.logger.debug('Seeding users and listings...');
    for (let i = 0; i < 5; i++) {
      await this.userService.create({
        name: faker.internet.userName(),
        email: faker.internet.email(),
      });
      await this.listingService.create({
        name: faker.internet.userName(),
        email: faker.internet.email(),
      });
    }
    this.logger.debug('Done seeding.');
  }

  // Puedes agregar más métodos para seedear otros modelos
}