import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { SeedService } from './app/modules/seed/service/seed.service';
import { UserService } from './app/modules/user/service/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  const userService = app.get(UserService);
  const users = await userService.findAll();

  if (users.length === 0) {
    const seedService = app.get(SeedService);
    await seedService.seed();
  }
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
