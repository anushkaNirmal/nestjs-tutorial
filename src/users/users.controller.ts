import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //GET /users
  findAll() {
    return [];
  }

  @Get(':id') //GET /users:id
  findById(@Param('id') id: string) {
    return { id };
  }

  @Post() //POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') //PATCH /users/:id
  findOneAndUpdate(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //DELETE /users:id
  findByIdAndDelete(@Param('id') id: string) {
    return { id };
  }
}
