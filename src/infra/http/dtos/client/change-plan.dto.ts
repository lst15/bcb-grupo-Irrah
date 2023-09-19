import { IsNotEmpty } from 'class-validator';

export class ChangePlanDto {
  @IsNotEmpty()
  user_uuid: string;
  @IsNotEmpty()
  plan_type: number;
}
