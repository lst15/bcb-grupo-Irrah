import { IsNotEmpty, IsNumber } from 'class-validator';

export class ChangePlanDto {
  @IsNumber()
  user_id: number;
  @IsNotEmpty()
  plan_type: string;
}
