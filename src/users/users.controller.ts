import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get() //GET /users
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id') //GET /users:id
  findById(@Param('id') id: string) {
    return this.userService.findById(+id); //unary plus convert string to number
  }

  @Post() //POST /users
  create(@Body() user: { name: string; email: string }) {
    return this.userService.create(user);
  }

  @Patch(':id') //PATCH /users/:id
  findOneAndUpdate(
    @Param('id') id: string,
    @Body() userUpdate: { name?: string; email?: string },
  ) {
    return this.userService.update(+id, userUpdate);
  }

  @Delete(':id') //DELETE /users:id
  findByIdAndDelete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
