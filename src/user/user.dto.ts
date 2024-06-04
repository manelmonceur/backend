import { PartialType } from '@nestjs/mapped-types';
import { Roles } from './entities/Roles';
import { Genders } from './entities/Genders';

export class CreateUserDto {
  name: string;

  phone: string;

  role: Roles;

  email: string;

  gender: Genders;

  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
