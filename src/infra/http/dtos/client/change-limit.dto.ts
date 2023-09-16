import { IsNumber, Min } from 'class-validator';

export class ChangeLimitDto {
  @IsNumber()
  user_id: number;
  @IsNumber()
  @Min(0)
  limit: number;
}
