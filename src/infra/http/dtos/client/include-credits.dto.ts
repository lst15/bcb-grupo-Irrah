import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class IncludeCreditsDto {
  @IsNotEmpty()
  user_uuid: string;
  @IsNumber()
  @Min(0)
  credits: number;
}
