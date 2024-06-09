import { IsNotEmpty } from 'class-validator';

export class CreateMeetingDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  parent: string;

  @IsNotEmpty()
  parent_email: string;

  @IsNotEmpty()
  mentor: string;

  @IsNotEmpty()
  mentor_email: string;

  @IsNotEmpty()
  admin: string;

  @IsNotEmpty()
  admin_email: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  link: string;
}
