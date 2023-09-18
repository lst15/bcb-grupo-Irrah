import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePlatformDto {
  @IsNotEmpty()
  platform_name: string;
  @IsNumber()
  platform_cost: number;
}
