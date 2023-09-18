import { IsNotEmpty, IsNumber } from 'class-validator';

export class ChangePlanDto {
  @IsNumber()
  user_uuid: string;
  @IsNotEmpty()
  plan_type: string;
}
