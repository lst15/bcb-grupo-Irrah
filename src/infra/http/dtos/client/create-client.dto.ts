import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateClientDto {
  @IsNumber()
  user_id?: number;
  @IsNotEmpty()
  plan_type: string;
  @IsNumber()
  credits: number;
  @IsNumber()
  current_consume: number;
  @IsNumber()
  allow_consume: number;
}
