import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString, IsNotEmpty, IsDefined } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDefined()
  @IsEmail()
  email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
