import { IsNumber, Min } from 'class-validator';

export class IncludeCreditsDto {
  @IsNumber()
  user_uuid: string;
  @IsNumber()
  @Min(0)
  credits: number;
}
