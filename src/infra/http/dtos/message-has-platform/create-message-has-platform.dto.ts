import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMessageHasPlatformDto {
  @IsNotEmpty()
  message_text: string;

  @IsNotEmpty()
  message_to: string;

  @IsNotEmpty()
  user_uuid: string;

  @IsNumber()
  platform_id: number;
}
