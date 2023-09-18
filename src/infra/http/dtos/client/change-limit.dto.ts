import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class ChangeLimitDto {
  @IsNotEmpty()
  user_uuid: string;
  @IsNumber()
  @Min(0)
  limit: number;
}
