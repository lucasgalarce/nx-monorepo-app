// import { PrismaClient } from '@prisma/client';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../backend/src/app/app.module'; // Asegúrate de
import { faker } from '@faker-js/faker';
import { UserService } from '../backend/src/app/modules/user/service/user.service';

// const prisma = new PrismaClient();

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);
  for (let i = 0; i < 1; i++) {
    await userService.create({
      data: {
        name: faker.internet.userName(),
        email: faker.internet.email(),
      },
    });
    // await prisma.listing.create({
    //   data: {
    //     name: faker.internet.userName(),
    //     email: faker.internet.email(),
    //   },
    // });
  }
  await app.close();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
