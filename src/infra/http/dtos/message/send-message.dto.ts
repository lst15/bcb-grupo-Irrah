import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class SendMessageDto {
  @IsBoolean()
  is_whatsapp: boolean;
  @IsNotEmpty()
  text: string;
  @IsNumber()
  user_id: number;
}
