import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateParentDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  dateRange: [string, string];
}
