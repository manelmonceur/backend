import { IsNotEmpty } from 'class-validator';

export class CreateMeetingDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  parent: string;

  @IsNotEmpty()
  mentor: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  link: string;
}
