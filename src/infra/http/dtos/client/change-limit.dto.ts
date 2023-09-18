import { IsNumber, Min } from 'class-validator';

export class ChangeLimitDto {
  @IsNumber()
  user_uuid: string;
  @IsNumber()
  @Min(0)
  limit: number;
}
