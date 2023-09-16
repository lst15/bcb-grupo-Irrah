import { IsNumber, Min } from 'class-validator';

export class IncludeCreditsDto {
  @IsNumber()
  user_id: number;
  @IsNumber()
  @Min(0)
  credits: number;
}
