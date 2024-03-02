// import {
//   Body,
//   Controller,
//   Get,
//   Inject,
//   Post,
//   UseInterceptors,
// } from '@nestjs/common';
// import { instanceToPlain } from 'class-transformer';

// import { UserDto } from '../dto/user.dto';
// import { UserService } from '../service/user.service';

// @Controller('/users')
// @UseInterceptors(instanceToPlain)
// export class UserController {
//   constructor(@Inject(UserService) private readonly userService: UserService) {}

//   getService(): UserService {
//     return this.userService;
//   }

//   @Get('/')
//   async findAll() {
//     return this.getService().findAll();
//   }

//   @Post('/')
//   async save(@Body() entity: UserDto): Promise<string> {
//     await this.getService().create(entity);
//     return 'User created';
//   }
// }
