import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
  ParseIntPipe,
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './DTO';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get() //GET /users
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id') //GET /users:id
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id); //unary plus convert string to number
  }

  @Post() //POST /users
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id') //PATCH /users/:id
  findOneAndUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id') //DELETE /users:id
  findByIdAndDelete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
